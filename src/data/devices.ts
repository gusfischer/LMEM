export interface Device {
  name: string;
  prompt: string;
  influences: string[];
  image: string;
}

export const devices: Device[] = [
  {
    name: "HoloVinyl Player",
    prompt: "A transparent floating turntable that projects holographic album artwork while playing vinyl records, with floating neon controls and anti-gravity record storage system, retro-futuristic design with chrome accents",
    influences: ["Traditional Turntable", "LaserDisc Player", "Sony Walkman"],
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=2874"
  },
  {
    name: "MemoryTape Echo",
    prompt: "A cassette player that can extract and visualize memories stored in special crystal tapes, featuring bio-luminescent indicators and vapor-wave aesthetic with pearl white casing",
    influences: ["Cassette Walkman", "MiniDisc Player", "Polaroid Camera"],
    image: "https://images.unsplash.com/photo-1594022766835-58fae16e23c8?auto=format&fit=crop&q=80&w=2960"
  },
  {
    name: "Neural Rhythm Box",
    prompt: "A brain-wave activated music device with floating crystalline spheres that pulse with light in rhythm, featuring organic curves and bioluminescent touch panels",
    influences: ["iPod", "Transistor Radio", "Boombox"],
    image: "https://images.unsplash.com/photo-1626128665085-483747621778?auto=format&fit=crop&q=80&w=2940"
  },
  {
    name: "Quantum Soundscape Generator",
    prompt: "A device that creates music by sampling sounds from parallel universes, with retrofuturistic vacuum tubes, geometric patterns, and a time-window display",
    influences: ["Reel-to-Reel Player", "Synthesizer", "Radio Receiver"],
    image: "https://images.unsplash.com/photo-1558483819-2781de708c72?auto=format&fit=crop&q=80&w=2940"
  },
  {
    name: "AetherWave Transmitter",
    prompt: "A steampunk-inspired device that broadcasts music through aether waves, featuring brass dials, crystal resonators, and mechanical butterfly animations",
    influences: ["Gramophone", "Telegraph", "Tube Radio"],
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=2940"
  }
];