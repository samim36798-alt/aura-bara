import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { Eye, EyeOff, Sparkles, RotateCw, Volume2, VolumeX, Info } from 'lucide-react';

interface FoodItemMeta {
  id: string;
  name: string;
  category: string;
  description: string;
  calories: string;
  pairing: string;
}

export const FOOD_ITEMS_META: FoodItemMeta[] = [
  {
    id: 'macaron',
    name: 'Pistachio & 24K Gold Macaron',
    category: 'Haute Pâtisserie',
    description: 'Double-almond shell dusted with edible gold flakes, filled with single-origin Sicilian pistachio ganache and raspberry reduction.',
    calories: '145 kcal',
    pairing: 'Vintage Champagne & Sencha Tea',
  },
  {
    id: 'burger',
    name: 'Glazed Brioche Truffle Slider',
    category: 'Culinary Architecture',
    description: 'Slow-fermented milk brioche with toasted sesame, A5 Wagyu medallion, aged Comté melt, and black winter truffle glaze.',
    calories: '380 kcal',
    pairing: 'Piedmont Nebbiolo 2018',
  },
  {
    id: 'avocado',
    name: 'Avocado Tartare & Caviar Plinth',
    category: 'Botanical Gastronomy',
    description: 'Hand-sculpted ripe avocado dome with lime zest essence, smoked sea salt flakes, and Ossetra imperial pearls.',
    calories: '190 kcal',
    pairing: 'Chablis Premier Cru',
  },
  {
    id: 'donut',
    name: 'Velvet Raspberry Glazed Ring',
    category: 'Viennoiserie Moderne',
    description: 'Crisp sourdough brioche ring drenched in ruby raspberry mirror glaze with white chocolate confetti and freeze-dried rose petals.',
    calories: '280 kcal',
    pairing: 'Ecuadorian Cold Brew & Oat Foam',
  },
  {
    id: 'sushi',
    name: 'Toro & Uni Golden Maki',
    category: 'Edomae Modernist',
    description: 'Akami bluefin tuna and Hokkaido sea urchin wrapped in artisanal Ariake toasted nori, crowned with golden trout roe.',
    calories: '160 kcal',
    pairing: 'Junmai Daiginjo Sake',
  },
  {
    id: 'cocktail',
    name: 'The Golden Nectar Goblet',
    category: 'Liquid Alchemy',
    description: 'Clarified yellow peach nectar, saffron-infused botanical gin, effervescent champagne mist, and floating gold leaf ribbons.',
    calories: '120 kcal',
    pairing: 'Served at 4°C with Citrus Mist',
  },
];

/* =========================================================================
   Procedural 3D Food Mesh Builders
   ========================================================================= */

function createMacaronGroup(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'macaron';

  // Shell material (matte satin pistachio/champagne gold)
  const shellMat = new THREE.MeshStandardMaterial({
    color: 0x98b87a,
    roughness: 0.35,
    metalness: 0.12,
  });

  const skirtMat = new THREE.MeshStandardMaterial({
    color: 0x82a563,
    roughness: 0.85,
    metalness: 0.05,
  });

  const fillingMat = new THREE.MeshStandardMaterial({
    color: 0xdf5464, // raspberry ganache
    roughness: 0.25,
    metalness: 0.08,
  });

  const goldMat = new THREE.MeshStandardMaterial({
    color: 0xe6c278,
    roughness: 0.2,
    metalness: 0.85,
  });

  // Top shell
  const topShellGeo = new THREE.SphereGeometry(0.85, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.5);
  topShellGeo.scale(1, 0.45, 1);
  const topShell = new THREE.Mesh(topShellGeo, shellMat);
  topShell.position.y = 0.22;
  group.add(topShell);

  // Top ruffled foot (torus)
  const topSkirtGeo = new THREE.TorusGeometry(0.82, 0.08, 12, 32);
  topSkirtGeo.rotateX(Math.PI / 2);
  const topSkirt = new THREE.Mesh(topSkirtGeo, skirtMat);
  topSkirt.position.y = 0.2;
  group.add(topSkirt);

  // Raspberry Ganache filling
  const fillingGeo = new THREE.CylinderGeometry(0.8, 0.8, 0.2, 32);
  const filling = new THREE.Mesh(fillingGeo, fillingMat);
  filling.position.y = 0;
  group.add(filling);

  // Bottom shell (inverted)
  const bottomShellGeo = new THREE.SphereGeometry(0.85, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.5);
  bottomShellGeo.scale(1, 0.45, 1);
  const bottomShell = new THREE.Mesh(bottomShellGeo, shellMat);
  bottomShell.rotation.x = Math.PI;
  bottomShell.position.y = -0.22;
  group.add(bottomShell);

  // Bottom ruffled foot
  const bottomSkirtGeo = new THREE.TorusGeometry(0.82, 0.08, 12, 32);
  bottomSkirtGeo.rotateX(Math.PI / 2);
  const bottomSkirt = new THREE.Mesh(bottomSkirtGeo, skirtMat);
  bottomSkirt.position.y = -0.2;
  group.add(bottomSkirt);

  // Gold leaf flakes on top
  for (let i = 0; i < 7; i++) {
    const flakeGeo = new THREE.PlaneGeometry(0.12, 0.08);
    const flake = new THREE.Mesh(flakeGeo, goldMat);
    const angle = (i / 7) * Math.PI * 2;
    const r = 0.2 + Math.random() * 0.35;
    flake.position.set(Math.cos(angle) * r, 0.52 + Math.random() * 0.04, Math.sin(angle) * r);
    flake.rotation.set(-0.2 + Math.random() * 0.4, Math.random() * Math.PI, Math.random() * 0.4);
    group.add(flake);
  }

  group.scale.set(1.1, 1.1, 1.1);
  return group;
}

function createBurgerGroup(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'burger';

  // Materials
  const bunMat = new THREE.MeshStandardMaterial({
    color: 0xc88242,
    roughness: 0.4,
    metalness: 0.1,
  });
  const sesameMat = new THREE.MeshStandardMaterial({
    color: 0xf5eccb,
    roughness: 0.5,
  });
  const pattyMat = new THREE.MeshStandardMaterial({
    color: 0x3d2314,
    roughness: 0.85,
  });
  const cheeseMat = new THREE.MeshStandardMaterial({
    color: 0xffb703,
    roughness: 0.3,
  });
  const lettuceMat = new THREE.MeshStandardMaterial({
    color: 0x588157,
    roughness: 0.5,
  });

  // Top bun
  const topBunGeo = new THREE.SphereGeometry(0.9, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.5);
  topBunGeo.scale(1, 0.65, 1);
  const topBun = new THREE.Mesh(topBunGeo, bunMat);
  topBun.position.y = 0.35;
  group.add(topBun);

  // Sesame seeds scattered on top bun
  for (let i = 0; i < 28; i++) {
    const seedGeo = new THREE.CapsuleGeometry(0.02, 0.05, 4, 8);
    const seed = new THREE.Mesh(seedGeo, sesameMat);
    const u = Math.random();
    const theta = Math.random() * Math.PI * 2;
    const r = 0.65 * Math.sqrt(u);
    const x = r * Math.cos(theta);
    const z = r * Math.sin(theta);
    const y = 0.35 + Math.sqrt(Math.max(0, 0.9 * 0.9 - (x * x + z * z))) * 0.65 + 0.01;
    seed.position.set(x, y, z);
    seed.rotation.set(Math.random() * 0.4, theta, Math.random() * 0.4);
    group.add(seed);
  }

  // Melted Cheese slice
  const cheeseGeo = new THREE.BoxGeometry(1.4, 0.05, 1.4);
  const cheese = new THREE.Mesh(cheeseGeo, cheeseMat);
  cheese.rotation.y = Math.PI / 4;
  cheese.position.y = 0.22;
  group.add(cheese);

  // Wagyu Patty
  const pattyGeo = new THREE.CylinderGeometry(0.92, 0.92, 0.3, 32);
  const patty = new THREE.Mesh(pattyGeo, pattyMat);
  patty.position.y = 0.05;
  group.add(patty);

  // Crisp lettuce layer (wavy disk)
  const lettuceGeo = new THREE.CylinderGeometry(0.98, 0.98, 0.08, 32);
  const lettuce = new THREE.Mesh(lettuceGeo, lettuceMat);
  lettuce.position.y = -0.12;
  group.add(lettuce);

  // Bottom bun
  const bottomBunGeo = new THREE.CylinderGeometry(0.88, 0.82, 0.3, 32);
  const bottomBun = new THREE.Mesh(bottomBunGeo, bunMat);
  bottomBun.position.y = -0.3;
  group.add(bottomBun);

  group.scale.set(0.95, 0.95, 0.95);
  return group;
}

function createAvocadoGroup(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'avocado';

  // Materials
  const skinMat = new THREE.MeshStandardMaterial({
    color: 0x1f2e1a,
    roughness: 0.9,
    metalness: 0.05,
  });
  const fleshMat = new THREE.MeshStandardMaterial({
    color: 0xb5cf68,
    roughness: 0.35,
    metalness: 0.05,
  });
  const pitMat = new THREE.MeshStandardMaterial({
    color: 0x4a2511,
    roughness: 0.3,
    metalness: 0.2,
  });

  // Half Avocado Body (pear/egg shape slice)
  const avocadoGeo = new THREE.SphereGeometry(0.9, 32, 24, 0, Math.PI, 0, Math.PI);
  avocadoGeo.scale(0.8, 1.25, 0.55);
  const skin = new THREE.Mesh(avocadoGeo, skinMat);
  skin.rotation.y = -Math.PI / 2;
  group.add(skin);

  // Flat cut face
  const faceShape = new THREE.Shape();
  faceShape.absellipse(0, 0, 0.65, 1.05, 0, Math.PI * 2, false, 0);
  const faceGeo = new THREE.ShapeGeometry(faceShape, 32);
  const face = new THREE.Mesh(faceGeo, fleshMat);
  face.rotation.y = Math.PI / 2;
  group.add(face);

  // Brown glossy seed/pit
  const pitGeo = new THREE.SphereGeometry(0.42, 24, 20);
  pitGeo.scale(0.85, 1, 0.7);
  const pit = new THREE.Mesh(pitGeo, pitMat);
  pit.position.set(0.18, -0.15, 0);
  group.add(pit);

  // Caviar pearls garnish on the flesh
  const caviarMat = new THREE.MeshStandardMaterial({
    color: 0x1a1a1a,
    roughness: 0.15,
    metalness: 0.3,
  });
  for (let i = 0; i < 16; i++) {
    const pearlGeo = new THREE.SphereGeometry(0.045, 8, 8);
    const pearl = new THREE.Mesh(pearlGeo, caviarMat);
    pearl.position.set(0.05, 0.45 + (Math.random() - 0.5) * 0.4, (Math.random() - 0.5) * 0.35);
    group.add(pearl);
  }

  group.scale.set(1.05, 1.05, 1.05);
  return group;
}

function createDonutGroup(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'donut';

  const doughMat = new THREE.MeshStandardMaterial({
    color: 0xd49b55,
    roughness: 0.55,
  });
  const glazeMat = new THREE.MeshStandardMaterial({
    color: 0xdf3b68, // vivid raspberry mirror glaze
    roughness: 0.15,
    metalness: 0.15,
  });

  // Main torus dough
  const doughGeo = new THREE.TorusGeometry(0.75, 0.38, 24, 48);
  doughGeo.rotateX(Math.PI / 2);
  const dough = new THREE.Mesh(doughGeo, doughMat);
  group.add(dough);

  // Glaze layer (slightly larger half torus)
  const glazeGeo = new THREE.TorusGeometry(0.76, 0.39, 16, 48, Math.PI * 1.95);
  glazeGeo.rotateX(Math.PI / 2);
  const glaze = new THREE.Mesh(glazeGeo, glazeMat);
  glaze.position.y = 0.05;
  group.add(glaze);

  // Sprinkles (colorful cylinders)
  const sprinkleColors = [0xffffff, 0xffd166, 0x06d6a0, 0x118ab2, 0xe6c278];
  for (let i = 0; i < 45; i++) {
    const col = sprinkleColors[i % sprinkleColors.length];
    const sMat = new THREE.MeshStandardMaterial({ color: col, roughness: 0.3 });
    const sGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.14, 8);
    const sprinkle = new THREE.Mesh(sGeo, sMat);

    const angle = (i / 45) * Math.PI * 2 + (Math.random() - 0.5) * 0.2;
    const radius = 0.75 + (Math.random() - 0.5) * 0.25;
    sprinkle.position.set(Math.cos(angle) * radius, 0.42 + (Math.random() - 0.5) * 0.05, Math.sin(angle) * radius);
    sprinkle.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    group.add(sprinkle);
  }

  group.scale.set(1.05, 1.05, 1.05);
  return group;
}

function createSushiGroup(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'sushi';

  const noriMat = new THREE.MeshStandardMaterial({
    color: 0x121b14,
    roughness: 0.7,
  });
  const riceMat = new THREE.MeshStandardMaterial({
    color: 0xf4f4f2,
    roughness: 0.5,
  });
  const tunaMat = new THREE.MeshStandardMaterial({
    color: 0xd9383a, // rich tuna/salmon coral
    roughness: 0.25,
    metalness: 0.1,
  });
  const avocadoMat = new THREE.MeshStandardMaterial({
    color: 0x8cb369,
    roughness: 0.4,
  });
  const roeMat = new THREE.MeshStandardMaterial({
    color: 0xff7b00,
    roughness: 0.1,
    metalness: 0.3,
  });

  // Nori wrap (outer thin cylinder tube)
  const noriGeo = new THREE.CylinderGeometry(0.85, 0.85, 0.7, 32, 1, true);
  const nori = new THREE.Mesh(noriGeo, noriMat);
  group.add(nori);

  // Rice ring
  const riceGeo = new THREE.CylinderGeometry(0.83, 0.83, 0.68, 32);
  const rice = new THREE.Mesh(riceGeo, riceMat);
  group.add(rice);

  // Tuna center core
  const tunaGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.7, 16);
  const tuna = new THREE.Mesh(tunaGeo, tunaMat);
  tuna.position.set(-0.1, 0, 0);
  group.add(tuna);

  // Avocado filling slice
  const avoGeo = new THREE.BoxGeometry(0.2, 0.7, 0.35);
  const avo = new THREE.Mesh(avoGeo, avocadoMat);
  avo.position.set(0.3, 0, 0);
  group.add(avo);

  // Golden Ikura pearls on top
  for (let i = 0; i < 9; i++) {
    const pearlGeo = new THREE.SphereGeometry(0.08, 12, 12);
    const pearl = new THREE.Mesh(pearlGeo, roeMat);
    const a = (i / 9) * Math.PI * 2;
    pearl.position.set(Math.cos(a) * 0.25, 0.38, Math.sin(a) * 0.25);
    group.add(pearl);
  }

  group.scale.set(1.15, 1.15, 1.15);
  return group;
}

function createCocktailGroup(): THREE.Group {
  const group = new THREE.Group();
  group.name = 'cocktail';

  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    transmission: 0.9,
    opacity: 1,
    transparent: true,
    roughness: 0.05,
    ior: 1.5,
  });

  const liquidMat = new THREE.MeshStandardMaterial({
    color: 0xe6b800, // sparkling golden champagne
    roughness: 0.1,
    metalness: 0.2,
  });

  // Glass Bowl (cone / flute)
  const bowlGeo = new THREE.ConeGeometry(0.65, 1.0, 32, 1, true);
  bowlGeo.rotateX(Math.PI);
  const bowl = new THREE.Mesh(bowlGeo, glassMat);
  bowl.position.y = 0.5;
  group.add(bowl);

  // Liquid inside
  const liquidGeo = new THREE.ConeGeometry(0.58, 0.8, 24);
  liquidGeo.rotateX(Math.PI);
  const liquid = new THREE.Mesh(liquidGeo, liquidMat);
  liquid.position.y = 0.45;
  group.add(liquid);

  // Stem
  const stemGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.9, 16);
  const stem = new THREE.Mesh(stemGeo, glassMat);
  stem.position.y = -0.45;
  group.add(stem);

  // Base
  const baseGeo = new THREE.CylinderGeometry(0.5, 0.5, 0.04, 32);
  const base = new THREE.Mesh(baseGeo, glassMat);
  base.position.y = -0.9;
  group.add(base);

  group.scale.set(1.1, 1.1, 1.1);
  return group;
}

/* =========================================================================
   Main Interactive 3D Canvas Component
   ========================================================================= */

interface ThreeFoodCanvasProps {
  onSelectItem?: (item: FoodItemMeta) => void;
}

export const ThreeFoodCanvas: React.FC<ThreeFoodCanvasProps> = ({ onSelectItem }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const [scrollVelocity, setScrollVelocity] = useState<number>(0);
  const [selectedFood, setSelectedFood] = useState<FoodItemMeta | null>(null);
  const [isRotatingFast, setIsRotatingFast] = useState(false);

  // Three.js internal references
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const itemsGroupRef = useRef<THREE.Group[]>([]);
  const isDraggingRef = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const lastScrollY = useRef(0);
  const scrollVelAccum = useRef(0);

  useEffect(() => {
    if (!mountRef.current) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = mountRef.current.clientWidth || window.innerWidth;
    const height = mountRef.current.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // 2. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xfff3e0, 1.2);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xfffaed, 2.8);
    mainLight.position.set(5, 8, 6);
    scene.add(mainLight);

    const rimLight = new THREE.DirectionalLight(0xc5a880, 2.2);
    rimLight.position.set(-6, -4, -4);
    scene.add(rimLight);

    const pointLight = new THREE.PointLight(0xffe8c2, 1.8, 12);
    pointLight.position.set(0, 2, 4);
    scene.add(pointLight);

    // 3. Create all 3D Food Meshes and position them
    const macaron = createMacaronGroup();
    const burger = createBurgerGroup();
    const avocado = createAvocadoGroup();
    const donut = createDonutGroup();
    const sushi = createSushiGroup();
    const cocktail = createCocktailGroup();

    const items = [macaron, burger, avocado, donut, sushi, cocktail];
    itemsGroupRef.current = items;

    // Fixed orbital arrangement across viewport space
    // Primary item sits near right or center depending on window size
    items.forEach((item, index) => {
      scene.add(item);
      // Stagger items along depth and Y axis
      if (index === 0) {
        item.position.set(1.9, 0, 0);
        item.scale.set(1.3, 1.3, 1.3);
      } else {
        // Floating ambient companions around margins
        const side = index % 2 === 0 ? 1 : -1;
        item.position.set(side * (3.8 + (index * 0.4)), -4 + index * 1.8, -2 - (index * 0.5));
        item.scale.set(0.65, 0.65, 0.65);
      }
    });

    // 4. Scroll listener for velocity and position sync
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - lastScrollY.current);
      lastScrollY.current = currentScrollY;
      scrollVelAccum.current = Math.min(delta * 0.08, 15);
      setScrollVelocity(Math.round(scrollVelAccum.current * 10) / 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // 5. Mouse Interaction (Drag to rotate primary item)
    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - previousMousePosition.current.x;
      const deltaY = e.clientY - previousMousePosition.current.y;

      const activeGroup = itemsGroupRef.current[activeItemIndex];
      if (activeGroup) {
        activeGroup.rotation.y += deltaX * 0.01;
        activeGroup.rotation.x += deltaY * 0.01;
      }
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // 6. Resize listener
    const handleResize = () => {
      if (!mountRef.current || !renderer || !camera) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 7. Animation Loop with smooth inertial damping
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const scrollOffset = window.scrollY * 0.0025;

      // Damp scroll velocity back to 0
      scrollVelAccum.current *= 0.94;
      const currentVel = scrollVelAccum.current;

      // Rotate all items in 3D
      items.forEach((item, index) => {
        const isFocused = index === activeItemIndex;
        const speedMultiplier = isFocused ? (isRotatingFast ? 5 : 1) : 0.6;
        const velBoost = 1 + currentVel * 0.8;

        // Continuous tumbling rotations
        item.rotation.y += (0.008 + index * 0.002) * speedMultiplier * velBoost;
        item.rotation.x = Math.sin(elapsedTime * 0.8 + index) * 0.2 + (scrollOffset * 0.5);
        item.rotation.z = Math.cos(elapsedTime * 0.6 + index) * 0.15;

        // Subtle vertical floating bob
        const baseOffsetY = isFocused ? 0 : (-3.5 + index * 1.6);
        item.position.y = baseOffsetY + Math.sin(elapsedTime * 1.5 + index) * 0.25 - (scrollOffset * 0.4);

        if (!isFocused) {
          // Parallax depth shift based on scroll
          item.position.x = (index % 2 === 0 ? 1 : -1) * (3.4 + Math.sin(scrollOffset + index) * 0.6);
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      domEl.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [activeItemIndex, isRotatingFast]);

  // Handle switching highlighted 3D item
  const handleSelectFood = (index: number) => {
    setActiveItemIndex(index);
    setSelectedFood(FOOD_ITEMS_META[index]);
    if (onSelectItem) {
      onSelectItem(FOOD_ITEMS_META[index]);
    }

    // Re-arrange 3D items so the selected one moves to center-right stage
    const items = itemsGroupRef.current;
    if (items.length > 0) {
      items.forEach((item, i) => {
        if (i === index) {
          item.position.set(1.9, 0, 0);
          item.scale.set(1.3, 1.3, 1.3);
        } else {
          const side = i % 2 === 0 ? 1 : -1;
          item.position.set(side * (3.8 + (i * 0.4)), -4 + i * 1.8, -2 - (i * 0.5));
          item.scale.set(0.65, 0.65, 0.65);
        }
      });
    }
  };

  const currentMeta = FOOD_ITEMS_META[activeItemIndex];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#0a0a0c] via-[#121217] to-[#0a0a0c] py-20 border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#c5a880]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#df5464]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a880] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>CULINARY ARCHITECTURE & SENSORY LAB</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#f5f4f0] leading-tight">
              3D Haute Gastronomy
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#9d9c98] max-w-md leading-relaxed">
            Scroll down to tumble our sculpted culinary creations in real-time 3D space, or click and drag directly to inspect every handcrafted contour.
          </p>
        </div>

        {/* Real-time Interaction Status & Scroll Velocity Pill */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md mb-8 text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c5a880] animate-pulse" />
            <span className="text-[#f5f4f0] font-medium">Interactive WebGL Engine Active</span>
            <span aria-hidden="true" className="text-white/20">|</span>
            <span className="text-[#9d9c98]">Tumble on Scroll · Drag to Orbit 360°</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 font-mono text-[11px] text-[#c5a880]">
              <span>SCROLL VELOCITY:</span>
              <span className="font-bold tabular-nums px-2 py-0.5 rounded bg-black/40 border border-[#c5a880]/30 text-white">
                {scrollVelocity} px/s
              </span>
            </div>

            <button
              onClick={() => {
                setIsRotatingFast(true);
                setTimeout(() => setIsRotatingFast(false), 2000);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#c5a880]/15 hover:bg-[#c5a880]/25 text-[#c5a880] border border-[#c5a880]/30 transition-colors cursor-pointer"
            >
              <RotateCw className="w-3 h-3" />
              <span>Spin Fast</span>
            </button>
          </div>
        </div>

        {/* Main 3D Stage & Spec Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Tasting Notes & Spec Card */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <div className="bg-[#14141a] border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#c5a880]">
                  {currentMeta.category}
                </span>
                <span className="text-xs font-mono text-[#63625f]">
                  0{activeItemIndex + 1} / 0{FOOD_ITEMS_META.length}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#f5f4f0]">
                {currentMeta.name}
              </h3>

              <p className="text-sm text-[#9d9c98] leading-relaxed">
                {currentMeta.description}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 text-xs">
                <div>
                  <div className="text-[#63625f] uppercase tracking-wider mb-1">Energy Ratio</div>
                  <div className="text-[#f5f4f0] font-mono font-medium">{currentMeta.calories}</div>
                </div>
                <div>
                  <div className="text-[#63625f] uppercase tracking-wider mb-1">Sommelier Pairing</div>
                  <div className="text-[#c5a880] font-medium">{currentMeta.pairing}</div>
                </div>
              </div>
            </div>

            {/* Food Selector Tabs */}
            <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 gap-2">
              {FOOD_ITEMS_META.map((item, index) => {
                const isActive = activeItemIndex === index;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectFood(index)}
                    className={`p-3 text-left rounded-lg border text-xs transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#c5a880] text-[#0a0a0c] border-[#c5a880] font-semibold shadow-md'
                        : 'bg-white/5 text-[#9d9c98] border-white/5 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="font-mono text-[10px] opacity-70 mb-0.5">0{index + 1}</div>
                    <div className="truncate font-medium">{item.name.split(' ')[0]}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: 3D Interactive Three.js Canvas Stage */}
          <div className="lg:col-span-7 h-[420px] sm:h-[500px] rounded-2xl bg-radial from-[#1e1e28]/70 via-[#101015] to-[#0a0a0c] border border-white/10 relative overflow-hidden order-1 lg:order-2 flex items-center justify-center shadow-2xl">
            {/* Direct WebGL Canvas Mount */}
            <div
              ref={mountRef}
              className="w-full h-full cursor-grab active:cursor-grabbing"
              title="Click and drag to rotate 3D food item"
            />

            {/* Stage Overlay Guide */}
            <div className="absolute top-4 left-4 z-10 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] text-[#c5a880] font-mono">
                <Info className="w-3 h-3" />
                <span>3D SCULPTED MESH</span>
              </span>
            </div>

            <div className="absolute bottom-4 right-4 z-10 pointer-events-none">
              <span className="text-[11px] text-[#63625f] uppercase tracking-widest font-mono">
                Three.js WebGL Realtime
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
