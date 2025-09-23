
// Diet entries derived from Austin Zoo "DIET GUIDELINES — AREA 1 (Primates)" (Jan 2025).
// Each entry can be a group (colony/yard) or an individual. For groups, we provide a label.
// Fields:
//   - animalId?: string (id from ANIMALS if individual)
//   - label?: string (for group/colony entries)
//   - area: string
//   - schedule: string[]  // e.g., ['AM','PM']
//   - items: { name: string, qty?: string }[]
//   - notes?: string
//   - prep?: boolean      // include in make-ahead checklist

export const DIETS = [
  // ========================
  // GEOFFROY’S SPIDER MONKEY — colony (Scar, Gramps, Blackie)
  // ========================
  {
    label: "Spider Monkeys — Scar, Gramps, Blackie",
    area: "1",
    schedule: ["AM", "PM"],
    items: [
      { name: "Mazuri Leaf-eater Primate Biscuit (5M02)", qty: "15 biscuits (~7g each)" },
      { name: "Mazuri New World Primate Biscuit (5MA5)", qty: "30 biscuits (~7g each)" },
      { name: "ZuPreem Canned Primate", qty: "1 can (411g)" },
      { name: "Leafy greens (romaine/leafy mix; limit kale/spinach 250g max)", qty: "900g (ad-lib; avoid waste)" },
      { name: "Vegetables (cooked)", qty: "1.0 kg (1” cubes)" },
      { name: "Fruit (melon/berries/stone fruit, de-pitted; NO avocado)", qty: "1.0 kg (1” cubes)" }
    ],
    notes: "Feed as a colony. Place half in bucket and half in large bowl within bucket. Twice daily. Reserve higher-value items for second feeding with training/enrichment.",
    prep: true
  },

  // ========================
  // PATAS MONKEY — colony (Bea, Will)
  // ========================
  {
    label: "Patas Monkeys — Bea, Will",
    area: "1",
    schedule: ["AM", "PM", "Egg M/W/F"],
    items: [
      { name: "Mazuri Primate Maintenance (5MA2)", qty: "16 biscuits (~7g each)" },
      { name: "ZuPreem Canned Primate", qty: "1 can (411g)" },
      { name: "Leafy greens (romaine/leafy mix/kale)", qty: "300g (ad-lib; avoid waste)" },
      { name: "Vegetables (squash/zucchini/cucumber/corn/broccoli/cauliflower/carrot/yam)", qty: "350g (1” cubes)" },
      { name: "Fruit (melon/berries/stone fruit, de-pitted)", qty: "300g (1” cubes)" },
      { name: "Hardboiled egg", qty: "Half each (Mon/Wed/Fri)" }
    ],
    notes: "Feed as a colony. Half in bucket and half in large bowl within bucket. Twice daily.",
    prep: true
  },

  // ========================
  // CAPUCHIN MONKEYS — individuals
  // ========================
  {
    animalId: "Capuchins", 
    area: "1",
    schedule: ["AM", "PM"],
    items: [
      { name: "Mazuri Primate LS (5M1G)", qty: "35g" },
      { name: "ZuPreem Canned Primate", qty: "100g" },
      { name: "Leafy greens", qty: "20g (ad-lib; avoid waste)" },
      { name: "Vegetables (cooked)", qty: "165g (1” cubes)" },
      { name: "Fruit (melon/berries/stone fruit, de-pitted)", qty: "60g (1” cubes)" },
      { name: "Hardboiled egg", qty: "1 (cut in half)" },
      { name: "Shelled nuts", qty: "10g" }
    ],
    notes: "Prepare as individual: half in rectangular tray, half in plastic bowl within tray. Twice daily.",
    prep: true
  },
 

  // ========================
  // WHITE-FRONTED BROWN LEMUR — individual (Acai)
  // ========================
  {
    animalId: "Acai - Brown Lemur",
    area: "1",
    schedule: ["AM", "PM"],
    items: [
      { name: "Mazuri Primate Leafeater (5M02)", qty: "5 biscuits" },
      { name: "ZuPreem Canned Primate", qty: "20g" },
      { name: "Leafy greens", qty: "125g (ad-lib; avoid waste)" },
      { name: "Vegetables (cucumber/carrots/celery)", qty: "75g (ad-lib; avoid waste)" },
      { name: "Cruciferous/starch (broccoli/cauliflower/cabbage/sweet potatoes/corn)", qty: "25g" },
      { name: "Fruit (melon/berries/stone fruit, de-pitted)", qty: "100g" }
    ],
    notes: "Prepare as individual. Twice daily. NO citrus in enrichment list.",
    prep: true
  },

  // ========================
  // WHITE-FRONTED BROWN LEMURS — colony (Plum, Hazel, Tripod)
  // ========================
  {
    label: "Brown Lemurs — Plum, Hazel, Tripod",
    area: "1",
    schedule: ["AM", "PM", "Nuts M/W/F"],
    items: [
      { name: "Mazuri Primate Leafeater (5M02)", qty: "30 biscuits" },
      { name: "ZuPreem Canned Primate", qty: "60g" },
      { name: "Leafy greens", qty: "400g (ad-lib; avoid waste)" },
      { name: "Vegetables (cucumber/carrots/celery)", qty: "225g (ad-lib; avoid waste)" },
      { name: "Cruciferous/starch (broccoli/cauliflower/cabbage/sweet potatoes/corn)", qty: "75g" },
      { name: "Fruit (melon/berries/stone fruit, de-pitted)", qty: "300g" },
      { name: "Unshelled nuts", qty: "30g (Mon/Wed/Fri)" }
    ],
    notes: "Feed as a colony. Twice daily. NO citrus in enrichment list.",
    prep: true
  },

  // ========================
  // RING-TAILED LEMURS — colony (Changis, Zabu, Frodo, Precious)
  // ========================
  {
    label: "Ring-tailed Lemurs — Changis, Zabu, Frodo, Precious",
    area: "1",
    schedule: ["AM", "PM", "Nuts M/W/F"],
    items: [
      { name: "Mazuri Primate Leafeater (5M02)", qty: "300g" },
      { name: "ZuPreem Canned Primate", qty: "40g" },
      { name: "Leafy greens", qty: "500g (ad-lib; avoid waste)" },
      { name: "Vegetables (cucumber/carrots/celery)", qty: "300g (ad-lib; avoid waste)" },
      { name: "Cruciferous/starch (broccoli/cauliflower/cabbage/sweet potatoes/corn)", qty: "100g" },
      { name: "Fruit (melon/berries/stone fruit, de-pitted)", qty: "300g" },
      { name: "Unshelled nuts", qty: "30g (Mon/Wed/Fri)" }
    ],
    notes: "Feed as a colony. Twice daily. NO citrus in enrichment list.",
    prep: true
  },

  // ========================
  // COMMON MARMOSETS — individuals (KoKo, Owen)
  // ========================
  {
    animalId: "Marmosets - Koko, Owen",
    area: "1",
    schedule: ["AM", "PM"],
    items: [
      { name: "ZuPreem Canned Marmoset", qty: "50g" },
      { name: "Mazuri gum Arabic (5B35) coconut yogurt mix", qty: "6g coconut yogurt + 6g Gum Arabic (dry) + 5g flaxseed oil (mix well)" },
      { name: "Leafy greens", qty: "20g (ad-lib; avoid waste)" },
      { name: "Vegetables (squash/zucchini/cucumber/corn/cooked carrot/cooked yam)", qty: "25g (chop small)" },
      { name: "Fruit (melon/berries/stone fruit, de-pitted)", qty: "25g (chop small)" },
      { name: "Insect protein (crickets/mealworms)", qty: "10g" }
    ],
    notes: "Prepare 2 diets as individuals. Half in tupperware and half in small bowl within tupperware. Twice daily. NO citrus in enrichment list.",
    prep: true
  },

  // ========================
  // GOLDEN-HANDED TAMARINS — colony (Confucius, Wu)
  // ========================
  {
    label: "Golden-handed Tamarins — Confucius, Wu",
    area: "1",
    schedule: ["AM", "PM"],
    items: [
      { name: "ZuPreem Canned Marmoset", qty: "100g" },
      { name: "Mazuri gum Arabic (5B35) coconut yogurt mix", qty: "3g coconut yogurt + 3g Gum Arabic (dry) + 2g flaxseed oil (mix well)" },
      { name: "Leafy greens", qty: "20g (ad-lib; avoid waste)" },
      { name: "Vegetables (squash/zucchini/cucumber/corn)", qty: "50g (chop small)" },
      { name: "Cruciferous/starch (cooked carrot/yam)", qty: "50g (chop small)" },
      { name: "Fruit (melon/berries/stone fruit, de-pitted)", qty: "50g (chop small)" },
      { name: "Insect protein (crickets/mealworms)", qty: "10g" }
    ],
    notes: "Feed as a colony; prepare 1 diet. Twice daily. NO citrus in enrichment list.",
    prep: true
  }
];





// CAPYBARA — Diego, Enrique, Olivia (colony) — PM after Encounter
DIETS.push({
  label: "Capybara — Diego, Enrique, Olivia",
  area: "5",
  schedule: ["PM"],
  items: [
    { name: "Mazuri Rat & Mouse (5663)", qty: "500 g" },
    { name: "Mazuri Timothy Hay-based Guinea Pig (5E6A)", qty: "500 g" },
    { name: "Mazuri Primate Maintenance (5MA2)", qty: "400 g" },
    { name: "Timothy/Orchard hay", qty: "Ad-lib (must have at all times)" },
    { name: "Leafy greens (romaine/leaf/collards/kale)", qty: "9 heads romaine daily (except Tu/Th); 3 heads non-romaine on Tu/Th" },
    { name: "Vegetables (yams, corn, carrot, broccoli, celery)", qty: "500 g (2–4\" cubes)" }
  ],
  notes:
    "Fed as a colony. Place all items except lettuce in bucket. Feed in afternoon after Encounter. Sweet fruit & nuts are enrichment only (not routine).",
  prep: true
})

// PRAIRIE DOGS — Simone, Rikes, Jones, Jinkies (colony) — AM
DIETS.push({
  label: "Prairie Dogs — Simone, Rikes, Jones, Jinkies",
  area: "5",
  schedule: ["AM"],
  items: [
    { name: "Mazuri Rat & Mouse (5663)", qty: "160 g" },
    { name: "Timothy pellets", qty: "55 g" },
    { name: "Timothy/Orchard hay", qty: "Ad-lib (must have at all times)" },
    { name: "Leafy greens (romaine/leaf/collards/kale)", qty: "55 g" },
    { name: "Vegetables (yams, corn, carrot, broccoli, celery)", qty: "55 g (sticks)" }
  ],
  notes:
    "Fed as a colony in AM; place all items in tupperware. Fruit/nuts/cereal are enrichment-only with limits.",
  prep: true
})

// CAPE PORCUPINE — Agave, Aziza, Grace (colony) — AM & PM
DIETS.push({
  label: "Cape Porcupines — Agave, Aziza, Grace",
  area: "5",
  schedule: ["AM", "PM"],
  items: [
    { name: "Mazuri Rat & Mouse (5663)", qty: "500 g" },
    { name: "Mazuri Primate Maintenance (5MA2)", qty: "350 g" },
    { name: "Timothy/Orchard hay", qty: "Ad-lib (must have at all times)" },
    { name: "Leafy greens (romaine/leaf/collards/kale)", qty: "600 g" },
    { name: "Root vegetables (carrot, yam, potato)", qty: "1.5 kg (2–4\" sticks)" },
    { name: "Vegetables (squash, zucchini, cucumber, celery, corn, bell pepper, green beans)", qty: "300 g (2–4\" sticks)" }
  ],
  notes:
    "Fed as a colony; place all items in bucket. Fruit/nuts/cereal are enrichment-only with limits.",
  prep: true
})

// HOGS — Albert (1.1) — individuals
DIETS.push({
  animalId: "hog-albert",
  area: "5",
  schedule: ["AM", "PM"],
  items: [
    { name: "Full o’ Pep Hog Feed", qty: "11 cups + 32 ml fish oil (pellets in metal pan)" },
    { name: "Vegetables (per guidelines)", qty: "Up to 3.0 kg (ad-lib; avoid waste; whole or chopped)" },
    { name: "Fruit (per guidelines; no pits/seeds)", qty: "Max 3.0 kg (whole or chopped)" }
  ],
  notes:
    "Fed as individual. Pellets in metal pans; produce in bucket. Nuts/cereal are enrichment-only with limits.",
  prep: true
})

DIETS.push({
  animalId: "hog-klara",
  area: "5",
  schedule: ["AM", "PM"],
  items: [
    { name: "Full o’ Pep Hog Feed", qty: "6 cups + 24 ml fish oil (pellets in metal pan)" },
    { name: "Vegetables (per guidelines)", qty: "Up to 3.0 kg (ad-lib; avoid waste; whole or chopped)" },
    { name: "Fruit (per guidelines; no pits/seeds)", qty: "Max 3.0 kg (whole or chopped)" }
  ],
  notes:
    "Fed as individual. Pellets in metal pans; produce in bucket. Nuts/cereal are enrichment-only with limits.",
  prep: true
})

// RED FOXES — Sampson, Tobi, Wiley — PM
for (const [id, name] of [
  ["red-fox-sampson", "Sampson"],
  ["red-fox-tobi", "Tobi"],
  ["red-fox-wiley", "Wiley"]
]) {
  DIETS.push({
    animalId: id,
    area: "5",
    schedule: ["PM"],
    items: [
      { name: "Dog food", qty: "50 g + 2 pumps fish oil (may soak in low-sodium stock)" },
      { name: "Boneless meat (chicken/turkey/pork/ground/fish)", qty: "100 g (1\" chunks)" },
      { name: "Whole prey (rodents, chicks)", qty: "75 g (approx.) + light dusting Mazuri slab supplement" },
      { name: "Hardboiled egg", qty: "1/2" },
      { name: "Vegetables (squash/zucchini/cucumber/celery/corn/peas/bell pepper/green beans)", qty: "40 g (1\" cubes)" },
      { name: "Fruit (apple/pear no seeds; berries/melon/banana; NO grapes)", qty: "40 g (1\" cubes)" }
    ],
    notes:
      "Fed as individuals in PM. ZuPreem Canned Feline up to 20 g per animal is enrichment-only. Insects up to 20 g as enrichment.",
    prep: false
  })
}

// FENNEC FOXES — Lily, Luka — PM
for (const [id, name] of [
  ["fennec-fox-lily", "Lily"],
  ["fennec-fox-luka", "Luka"]
]) {
  DIETS.push({
    animalId: id,
    area: "5",
    schedule: ["PM"],
    items: [
      { name: "Dog food", qty: "20 g + 1 pump fish oil (may soak in low-sodium stock)" },
      { name: "Boneless meat (chicken/turkey/pork/ground)", qty: "50 g (very small chunks)" },
      { name: "Mazuri slab supplement", qty: "Light dusting" },
      { name: "Whole prey (small mice/pinkies)", qty: "25 g" },
      { name: "Hardboiled egg", qty: "1/2" },
      { name: "Vegetables (squash/zucchini/cucumber/celery/corn/peas/bell pepper/green beans)", qty: "20 g (finely diced)" },
      { name: "Fruit (apple/pear no seeds; berries/melon/banana; NO grapes)", qty: "20 g (finely diced)" }
    ],
    notes:
      "Fed as individuals in PM. ZuPreem Canned Feline up to 20 g per animal and insects up to 10 g are enrichment-only.",
    prep: false
  })
}

// COYOTE — Clover — PM
DIETS.push({
  animalId: "coyote-clover",
  area: "5",
  schedule: ["PM"],
  items: [
    { name: "Dog food", qty: "100 g + 2 pumps fish oil (may soak in low-sodium stock)" },
    { name: "Boneless meat (chicken/turkey/pork/ground)", qty: "300 g + 5 g Mazuri slab meat supplement (very small chunks)" },
    { name: "Whole prey (small mice/pinkies)", qty: "100 g" },
    { name: "Hardboiled egg", qty: "1/2" },
    { name: "Vegetables (squash/zucchini/cucumber/celery/corn/peas/bell pepper/green beans)", qty: "50 g (1\" cubes)" },
    { name: "Fruit (apple/pear no seeds; berries/melon/banana; NO grapes)", qty: "50 g (1\" cubes)" }
  ],
  notes:
    "Fed as individual in PM. ZuPreem Canned Feline up to 20 g per animal and insects up to 50 g are enrichment-only.",
  prep: false
})

// BROWN-NOSED COATI — Stitch — PM
DIETS.push({
  animalId: "brown-nosed-coati-stitch",
  area: "5",
  schedule: ["PM"],
  items: [
    { name: "Dog food", qty: "60 g + 2 pumps fish oil (may soak in low-sodium stock)" },
    { name: "Boneless meat (chicken/turkey/pork/ground)", qty: "40 g + 5 g Mazuri slab meat supplement (very small chunks)" },
    { name: "Whole prey (small mice/pinkies)", qty: "40 g (approx.)" },
    { name: "ZuPreem Canned Feline", qty: "60 g" },
    { name: "Hardboiled egg", qty: "1 (whole)" },
    { name: "Vegetables (squash/zucchini/cucumber/celery/corn/peas/bell pepper/green beans)", qty: "60 g (1\" cubes)" },
    { name: "Fruit (apple/pear no seeds; berries/melon/banana; NO grapes)", qty: "60 g (1\" cubes)" }
  ],
  notes:
    "Fed as individual in PM. Sweet fruit limit 20 g and insects up to 25 g are enrichment-only.",
  prep: false
})