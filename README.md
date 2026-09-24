# CityLens — AI-Powered Photo Tourism & Landmark AR Explorer

**CityLens** is an intelligent, camera-first cultural heritage and landmark exploration web application. It combines Google Gemini multimodal vision, interactive augmented reality overlays, multilingual narration, historical dossiers, and accessible design to create an immersive travel and learning experience.

---

## 🌟 Key Features

- **🏛️ Intelligent Landmark Recognition**: 
  - Visual identification of monuments, UNESCO World Heritage sites, historic universities, and sacred architecture using Google Gemini vision models.
  - High-precision category classification (monument, temple, university, palace, fort, museum).

- **🎯 Interactive AR Keypoints**:
  - Live spatial bounding markers and tags highlighting architectural elements like domes, minarets, facades, spires, and intricate carvings.

- **🗺️ Interactive Map & Location Grounding**:
  - Embedded Leaflet map viewer showcasing landmark coordinates, nearby historic locations, and user position.
  - Compare visually recognized locations against camera EXIF GPS metadata.

- **🌐 Multilingual Voice & Narration**:
  - Supports 16+ languages including English, Hindi, Gujarati, Marathi, Tamil, Telugu, Bengali, Kannada, Malayalam, Spanish, French, German, Japanese, and more.
  - Natural speech playback with interactive audio clip player.

- **👴 Senior-Friendly Accessibility Mode**:
  - One-tap toggle for high contrast, enlarged typography, simplified summaries, and instant audio playback.

- **📖 Tour Journal & Offline PWA**:
  - Offline-ready progressive web app with local journal storage and Firebase synchronization for saved travel memories.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS, Leaflet, Lucide Icons, Framer Motion
- **Backend**: Node.js, Express, TSX, Google GenAI SDK (`@google/genai`)
- **Storage & Auth**: Firebase / LocalStorage
- **Metadata**: Exifr (EXIF metadata parsing)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- A Google Gemini API Key ([Google AI Studio](https://aistudio.google.com/))

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/bhavyajoshi3008-ship-it/city-ar-app.git
   cd city-ar-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the project root:
   ```env
   GEMINI_API_KEY="your-gemini-api-key-here"
   PORT=3000
   ```

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

---

## 📋 Available Scripts

- `npm run dev`: Runs the full-stack development server with tsx and Vite.
- `npm run build`: Builds the production bundle and server.
- `npm run lint`: Performs strict TypeScript type checks.
- `npm run preview`: Previews the production Vite build locally.

---

## 🔒 Security & Privacy

- Environment files (`.env*`) and sensitive credentials are excluded from source control.
- Image recognition requests process metadata client-side and server-side securely.

---

## 👤 Author

Developed by **Bhavya Joshi**
- GitHub: [@bhavyajoshi3008-ship-it](https://github.com/bhavyajoshi3008-ship-it)
