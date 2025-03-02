import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function XPTracker() {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);

  const gainXP = () => {
    const newXP = xp + 10;
    if (newXP >= level * 100) {
      setLevel(level + 1);
      setXp(0);
    } else {
      setXp(newXP);
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-2xl shadow-lg w-80">
      <h1 className="text-2xl font-bold">XP Tracker ⚡</h1>
      <p className="text-lg">Level: {level}</p>
      <Progress value={(xp / (level * 100)) * 100} className="my-4" />
      <motion.div whileTap={{ scale: 0.9 }}>
        <Button onClick={gainXP} className="w-full bg-purple-600 hover:bg-purple-700">
          Gain XP
        </Button>
      </motion.div>
    </div>
  );
}
