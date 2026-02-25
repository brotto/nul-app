export const company = {
  name: "brotto.io",
  publisher: "Ale Brotto",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@nul-app.app",
  telegramHandle: "@brottodev",
  telegramUrl: "https://t.me/brottodev"
};

export const appConfig = {
  name: "NUL",
  symbol: "∅",
  appStoreUrl: process.env.NEXT_PUBLIC_APPSTORE_URL || "https://apps.apple.com/",
  macAppStoreUrl: process.env.NEXT_PUBLIC_MAC_APPSTORE_URL || "https://apps.apple.com/",
  youtubeUrl:
    process.env.NEXT_PUBLIC_YOUTUBE_URL ||
    "https://youtu.be/x0p0ORdEqfc",
  statusUrl: process.env.NEXT_PUBLIC_STATUS_URL || ""
};

export const navLinks = [
  { label: "Product", href: "/#product" },
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Safety", href: "/safety" },
  { label: "Support", href: "/support" }
];

export const socialProof = [
  "Multi-model AI creative studio",
  "Creators, studios & teams",
  "Video, image, audio & transcription"
];

export const howItWorks = [
  {
    title: "Choose a mode",
    description: "Video, Image, Audio, or Transcription — all in one studio."
  },
  {
    title: "Describe or upload",
    description: "Use text prompts or upload reference material to guide the AI."
  },
  {
    title: "Generate, refine & export",
    description: "Iterate quickly, version your work, and export in high quality."
  }
];

export const features = [
  {
    title: "NUL Motion",
    description: "AI-powered video generation and editing for short narratives and campaigns."
  },
  {
    title: "NUL Vision",
    description: "High-definition images with style variations, framing, and composition control."
  },
  {
    title: "NUL Voice",
    description: "Synthetic voice with tone adjustments for voiceovers, dubbing, and audio spots."
  },
  {
    title: "NUL Transcribe",
    description: "Transcription with timestamps, quick review, and export in standard formats."
  },
  {
    title: "Library & versions",
    description: "Organize projects, iteration history, and multimodal assets in one place."
  },
  {
    title: "High-quality export",
    description: "Production-ready output for social media, campaigns, presentations, and workflows."
  },
  {
    title: "Prompt Studio",
    description: "AI-assisted prompt crafting with one-tap generation across all supported models."
  }
];

// ── AI Model Catalog ──────────────────────────────────────────────

export type ModelCategory = "video" | "image" | "audio" | "transcription";

export interface AIModel {
  name: string;
  provider: string;
  badge?: string;            // e.g. "NEW", "PRO"
  capabilities: string[];    // e.g. ["Text-to-Video", "Image-to-Video"]
}

export interface ModelSection {
  category: ModelCategory;
  label: string;
  icon: string;              // emoji
  description: string;
  models: AIModel[];
}

export const modelCatalog: ModelSection[] = [
  {
    category: "video",
    label: "Video",
    icon: "🎬",
    description: "Generate cinematic videos from text prompts, reference images, or existing clips.",
    models: [
      {
        name: "Google Veo 3.1",
        provider: "Google",
        badge: "NEW",
        capabilities: ["Text-to-Video", "Image-to-Video", "Video Extend", "4K Upscale"]
      },
      {
        name: "Google Veo 3.1 Fast",
        provider: "Google",
        capabilities: ["Text-to-Video", "Image-to-Video", "Video Extend"]
      },
      {
        name: "Sora 2",
        provider: "OpenAI",
        capabilities: ["Text-to-Video", "Image-to-Video"]
      },
      {
        name: "Sora 2 Pro",
        provider: "OpenAI",
        badge: "PRO",
        capabilities: ["Text-to-Video", "Image-to-Video"]
      },
      {
        name: "Kling 3.0",
        provider: "Kuaishou",
        badge: "NEW",
        capabilities: ["Text-to-Video", "Image-to-Video"]
      },
      {
        name: "Kling 2.6",
        provider: "Kuaishou",
        capabilities: ["Text-to-Video", "Image-to-Video", "Motion Control"]
      },
      {
        name: "Hailuo 02 Standard",
        provider: "MiniMax",
        capabilities: ["Text-to-Video"]
      },
      {
        name: "Hailuo 02 Pro",
        provider: "MiniMax",
        badge: "PRO",
        capabilities: ["Text-to-Video", "Image-to-Video"]
      },
      {
        name: "Hailuo 2.3 I2V",
        provider: "MiniMax",
        badge: "NEW",
        capabilities: ["Image-to-Video"]
      },
      {
        name: "Wan 2.6",
        provider: "Alibaba",
        capabilities: ["Text-to-Video", "Image-to-Video", "Video-to-Video"]
      },
      {
        name: "Wan Speech-to-Video",
        provider: "Alibaba",
        capabilities: ["Speech-to-Video"]
      },
      {
        name: "Grok Imagine Video",
        provider: "xAI",
        capabilities: ["Text-to-Video", "Image-to-Video"]
      },
      {
        name: "Kling AI Avatar",
        provider: "Kuaishou",
        capabilities: ["Avatar Generation"]
      },
      {
        name: "InfiniTalk Lip Sync",
        provider: "InfiniTalk",
        capabilities: ["Lip Sync"]
      }
    ]
  },
  {
    category: "image",
    label: "Image",
    icon: "🎨",
    description: "Create and edit stunning images with the latest text-to-image and image-to-image models.",
    models: [
      {
        name: "Imagen 4 Ultra",
        provider: "Google",
        badge: "NEW",
        capabilities: ["Text-to-Image", "2K Resolution"]
      },
      {
        name: "Imagen 4",
        provider: "Google",
        capabilities: ["Text-to-Image"]
      },
      {
        name: "Imagen 4 Fast",
        provider: "Google",
        capabilities: ["Text-to-Image"]
      },
      {
        name: "GPT Image 1.5",
        provider: "OpenAI",
        badge: "NEW",
        capabilities: ["Text-to-Image", "Image-to-Image"]
      },
      {
        name: "GPT Image 1 (4o)",
        provider: "OpenAI",
        capabilities: ["Text-to-Image"]
      },
      {
        name: "Midjourney",
        provider: "Midjourney",
        capabilities: ["Text-to-Image"]
      },
      {
        name: "Grok Imagine",
        provider: "xAI",
        capabilities: ["Text-to-Image", "Image-to-Image"]
      },
      {
        name: "Seedream 4.5",
        provider: "ByteDance",
        badge: "NEW",
        capabilities: ["Text-to-Image", "Image Edit", "Up to 4K"]
      },
      {
        name: "Seedream 4.0",
        provider: "ByteDance",
        capabilities: ["Text-to-Image", "Image Edit"]
      },
      {
        name: "Seedream 3.0",
        provider: "ByteDance",
        capabilities: ["Text-to-Image"]
      },
      {
        name: "Nano Banana Pro",
        provider: "Google",
        capabilities: ["Text-to-Image"]
      },
      {
        name: "Nano Banana Edit",
        provider: "Google",
        capabilities: ["Image Edit"]
      },
      {
        name: "Qwen Image",
        provider: "Alibaba",
        capabilities: ["Text-to-Image", "Image-to-Image"]
      },
      {
        name: "Z-Image Turbo",
        provider: "Z-Image",
        capabilities: ["Text-to-Image"]
      }
    ]
  },
  {
    category: "audio",
    label: "Audio & Music",
    icon: "🎵",
    description: "Professional voice synthesis, sound effects, music generation, and audio processing.",
    models: [
      {
        name: "TTS Turbo 2.5",
        provider: "ElevenLabs",
        capabilities: ["Text-to-Speech", "21+ Voices"]
      },
      {
        name: "Multilingual V2",
        provider: "ElevenLabs",
        capabilities: ["Text-to-Speech", "Multi-language"]
      },
      {
        name: "Dialogue V3",
        provider: "ElevenLabs",
        capabilities: ["Text-to-Dialogue"]
      },
      {
        name: "Sound Effect V2",
        provider: "ElevenLabs",
        capabilities: ["Sound Effects"]
      },
      {
        name: "Audio Isolation",
        provider: "ElevenLabs",
        capabilities: ["Voice Isolation"]
      },
      {
        name: "Suno Music",
        provider: "Suno",
        capabilities: ["Music Generation", "Extend", "Add Vocals", "Separate Vocals"]
      }
    ]
  },
  {
    category: "transcription",
    label: "Transcription",
    icon: "📝",
    description: "Convert audio and video to text with high-accuracy speech recognition.",
    models: [
      {
        name: "Scribe V1",
        provider: "ElevenLabs",
        capabilities: ["Speech-to-Text", "Timestamps"]
      }
    ]
  }
];

export const safetyHighlights = [
  "Automated content filtering",
  "Report & block system",
  "Dedicated support contact"
];

export const integrations = [
  "Multi-model generation via Kie.ai",
  "Voice synthesis via ElevenLabs",
  "Music generation via Suno"
];

// ── Credit Packs (one-time, in-app purchase) ─────────────────────
export const creditPacks = [
  { name: "Starter Pack",  credits: 100,  price: "$4.99"  },
  { name: "Plus Pack",     credits: 400,  price: "$14.99" },
  { name: "Pro Pack",      credits: 1000, price: "$29.99" },
  { name: "Studio Pack",   credits: 3000, price: "$74.99" }
];

// ── Subscription Plans ───────────────────────────────────────────
export const pricingPlans = [
  {
    name: "Pay As You Go",
    price: "Free to start",
    subtitle: "Try the studio",
    highlight: false,
    points: [
      "Access to all modes and models",
      "Buy credit packs as you need",
      "No commitment"
    ]
  },
  {
    name: "Pro Monthly",
    price: "$9.99/mo",
    subtitle: "For creators",
    highlight: true,
    points: [
      "200 credits/month included",
      "+10% bonus on credit pack purchases",
      "Prompt Studio access",
      "Family Sharing eligible"
    ]
  },
  {
    name: "Pro Annual",
    price: "$89.99/yr",
    subtitle: "Best value — save 25%",
    highlight: false,
    points: [
      "300 credits/month (3,600/year)",
      "+20% bonus on credit pack purchases",
      "Prompt Studio access",
      "Family Sharing eligible"
    ]
  }
];

// ── Feature Comparison ───────────────────────────────────────────
export const pricingComparison = [
  {
    feature: "Modes (video, image, audio, transcription)",
    free: "All",
    pro: "All",
    studio: "All"
  },
  {
    feature: "Monthly credits included",
    free: "—",
    pro: "200",
    studio: "300"
  },
  {
    feature: "Credit pack bonus",
    free: "—",
    pro: "+10%",
    studio: "+20%"
  },
  {
    feature: "Prompt Studio",
    free: "—",
    pro: "✓",
    studio: "✓"
  },
  {
    feature: "Family Sharing",
    free: "—",
    pro: "✓",
    studio: "✓"
  },
  {
    feature: "Support",
    free: "Email",
    pro: "Priority",
    studio: "Priority"
  }
];

export const faqItems = [
  {
    question: "What is NUL?",
    answer:
      "NUL is an AI-powered multimodal creative studio for generating and editing video, images, audio, and transcriptions — all in one app."
  },
  {
    question: "What can I create?",
    answer:
      "You can generate videos, images, music, sound effects, voiceovers, and transcriptions using state-of-the-art AI models from multiple providers."
  },
  {
    question: "How does content moderation work?",
    answer:
      "We combine automated filtering, contextual analysis, and manual review when necessary. Content that violates our policies may be removed and accounts may be suspended."
  },
  {
    question: "Can I generate adult content?",
    answer:
      "No. We do not allow sexually explicit content, sexual exploitation, graphic violence, or any illegal material. Sensitive content may be subject to age restrictions."
  },
  {
    question: "How does privacy work?",
    answer:
      "We collect minimal personal data (Apple ID identifier, optional name and email). Prompts and content metadata may be processed by our AI service providers. See our Privacy Policy for details."
  },
  {
    question: "How do credits work?",
    answer:
      "Credits are purchased via Apple In-App Purchase. Each AI generation costs a certain number of credits depending on the model and settings. Subscription plans include monthly credit allowances and bonus multipliers."
  },
  {
    question: "Are credits refundable?",
    answer:
      "Credits are non-refundable once used. For purchase-related issues, Apple's refund policies apply. If a generation fails due to a server error, credits are automatically refunded."
  }
];

export const legalEffectiveDate = "February 15, 2026";
