import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';

function App() {
  return (
    <div className="flex flex-col items-center justify-between h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white text-center p-6">

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-1">
        {/* Title */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold mb-10"
        >
          SSRMS | Spaza Shop Registration & Management System
        </motion.h1>

        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <Wrench className="w-24 h-24 text-yellow-400 animate-spin-slow" />
        </motion.div>

        {/* Under Development Text */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-2xl font-semibold text-yellow-300 mb-10"
        >
          🚧 Under Development 🚧
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-lg max-w-2xl text-gray-300 px-4"
        >
          The Spaza Shop Registration & Management System (SSRMS) is a digital platform
          designed to streamline the registration, verification, and compliance monitoring
          of spaza shops across South Africa.
        </motion.p>
      </div>

      {/* Footer */}
      <footer className="text-sm text-gray-400 mt-6">
        Built with ❤️ for South African communities
      </footer>
    </div>
  );
}

export default App;