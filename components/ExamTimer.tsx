import { useEffect, useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const TIMER_TICK_MS = 1000;

export default function ExamTimer() {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const intervalId = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, TIMER_TICK_MS);
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const { minutes, seconds } = useMemo(() => {
    const mins = Math.floor(elapsedSeconds / 60);
    const secs = elapsedSeconds % 60;
    return { minutes: mins, seconds: secs };
  }, [elapsedSeconds]);

  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  const resetTimer = () => {
    setElapsedSeconds(0);
    setIsRunning(false);
  };

  return (
    <View style={styles.card}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>Chronometre</Text>
      </View>
      <Text style={styles.time}>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </Text>
      <View style={styles.controls}>
        <Pressable
          onPress={toggleTimer}
          style={({ pressed }) => [
            styles.controlButton,
            styles.primaryButton,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.primaryButtonText}>
            {isRunning ? "Pause" : "Demarrer"}
          </Text>
        </Pressable>
        <Pressable
          onPress={resetTimer}
          style={({ pressed }) => [
            styles.controlButton,
            styles.secondaryButton,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.secondaryButtonText}>Reinitialiser</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 12,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#0b1220",
    borderWidth: 1,
    borderColor: "#1d4ed8",
  },
  badge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: "#1e293b",
  },
  badgeText: {
    color: "#93c5fd",
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },
  time: {
    marginTop: 8,
    fontSize: 36,
    fontWeight: "800",
    color: "#f8fafc",
    letterSpacing: 2,
  },
  controls: {
    marginTop: 12,
    flexDirection: "row",
    gap: 10,
  },
  controlButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
  },
  primaryButton: {
    backgroundColor: "#38bdf8",
  },
  secondaryButton: {
    backgroundColor: "#0f172a",
    borderWidth: 1,
    borderColor: "#334155",
  },
  primaryButtonText: {
    color: "#0f172a",
    fontWeight: "700",
  },
  secondaryButtonText: {
    color: "#e2e8f0",
    fontWeight: "700",
  },
  buttonPressed: {
    opacity: 0.85,
  },
});
