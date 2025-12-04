# Legal Documentation Website

A Next.js application for hosting legal documents including Terms of Service and Privacy Policies for Fin.com (Wind Technologies).

## � Live Preview

Visit the deployed site or run locally with `pnpm dev`

## 📋 Project Overview

This project replicates the legal documentation from [Fin.com Help Center](https://help.fin.com/en/articles/11058454-terms-of-services-and-privacy-policy) as a self-hosted Next.js application.

## 🏗️ Project Structure

```
legal-web/
├── src/
│   └── app/
│       ├── page.tsx                    # Homepage with overview
│       ├── layout.tsx                  # Root layout
│       ├── globals.css                 # Global styles
│       ├── terms/
│       │   ├── page.tsx               # Terms overview
│       │   ├── uae/
│       │   │   └── page.tsx           # UAE Terms of Service
│       │   └── eea/
│       │       └── page.tsx           # EEA Terms of Service
│       ├── privacy/
│       │   ├── page.tsx               # Privacy overview
│       │   ├── uae/
│       │   │   └── page.tsx           # UAE Privacy Policy
│       │   └── eea/
│       │       └── page.tsx           # EEA Privacy Policy
│       └── third-party/
│           └── page.tsx               # Third-party legal (Bridge)
└── public/
    └── legal/                         # PDF storage directory
        ├── uae-tos.pdf               # (To be added)
        ├── eea-tos.pdf               # (To be added)
        ├── uae-pp.pdf                # (To be added)
        └── eea-pp.pdf                # (To be added)
```

## 🎯 Features

- ✅ **Homepage** - Overview of all legal documents with disclaimer
- ✅ **Terms of Service** - UAE 🇦🇪 & EEA 🇪🇺 versions
- ✅ **Privacy Policies** - UAE 🇦🇪 & EEA 🇪🇺 versions
- ✅ **Third-Party Legal** - Bridge integration documents
- ✅ **Innovation Testing Licence (ITL) Disclaimer** - DFSA compliance
- ✅ **Related Articles** - Quick links to help resources
- ✅ **Responsive Design** - Mobile-friendly layout
- ✅ **Clean Navigation** - Easy browsing between documents

## 🚀 Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with document overview |
| `/terms` | Terms of Service overview |
| `/terms/uae` | Full UAE Terms of Service |
| `/terms/eea` | Full EEA Terms of Service |
| `/privacy` | Privacy Policy overview |
| `/privacy/uae` | Full UAE Privacy Policy |
| `/privacy/eea` | Full EEA Privacy Policy |
| `/third-party` | Third-party legal documents (Bridge) |

## 🛠️ Technologies Used

- **Framework**: Next.js 15.5.4 (App Router)
- **React**: 19.1.0
- **Styling**: Tailwind CSS 4
- **TypeScript**: 5.x
- **Build Tool**: Turbopack
- **Linting**: Biome 2.2.0
- **Package Manager**: pnpm

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/legal-web.git
cd legal-web
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
pnpm start
```

## 📄 Adding PDF Documents

To enable PDF downloads, add the following files to `/public/legal/`:

- `uae-tos.pdf` - UAE Terms of Service
- `eea-tos.pdf` - EEA Terms of Service
- `uae-pp.pdf` - UAE Privacy Policy
- `eea-pp.pdf` - EEA Privacy Policy

## 🎨 Styling

The application uses Tailwind CSS with a custom color scheme:

- **Primary (Blue)**: UAE documents
- **Secondary (Green)**: EEA documents
- **Tertiary (Purple)**: Third-party documents
- **Warning (Yellow)**: Disclaimer sections

## 📋 Content Structure

### Disclaimer (ITL)

All pages include the Innovation Testing Licence disclaimer with 4 key points about DFSA authorization and testing restrictions.

### Legal Documents

- Structured with clear headings
- Consumer advisory notices
- Download options (PDF)
- Regional differentiation (UAE 🇦🇪 & EEA 🇪🇺)

### Related Articles

- How to add funds using Wise (TransferWise)
- Verification guide
- USD Virtual Account information
- Security Policy
- Fin.com Licenses

## 🔗 External Links

- **Bridge Terms**: <https://bridge.xyz/terms>
- **Bridge Privacy**: <https://bridge.xyz/privacy>
- **Support Email**: <compliance@fin.com>

## 📝 License

This project contains legal documentation for Wind Technologies (Fin). All rights reserved.

## 🤝 Contributing

This is a proprietary legal documentation project. Please contact the maintainers before making contributions.

## 📞 Contact

**Fin.com Help Center**  
Email: <compliance@fin.com>  
