import { useMemo, useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type AnswerState = "correct" | "incorrect" | null;

const TOTAL_QUESTIONS = 50;
const POINTS_PER_CORRECT = 2;

export default function Index() {
  const [answers, setAnswers] = useState<AnswerState[]>(
    Array.from({ length: TOTAL_QUESTIONS }, () => null)
  );

  const { correctCount, answeredCount, score } = useMemo(() => {
    let correct = 0;
    let answered = 0;
    for (const value of answers) {
      if (value !== null) answered += 1;
      if (value === "correct") correct += 1;
    }
    return {
      correctCount: correct,
      answeredCount: answered,
      score: correct * POINTS_PER_CORRECT,
    };
  }, [answers]);

  const setAnswer = (index: number, value: Exclude<AnswerState, null>) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = prev[index] === value ? null : value;
      return next;
    });
  };

  const resetAll = () => {
    setAnswers(Array.from({ length: TOTAL_QUESTIONS }, () => null));
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>QCM - Suivi des reponses</Text>
            <Text style={styles.subtitle}>
              {answeredCount}/{TOTAL_QUESTIONS} questions repondues
            </Text>
            <Text style={styles.score}>
              Bonnes reponses: {correctCount} / {TOTAL_QUESTIONS}
            </Text>
            <Text style={styles.score}>Note: {score} points</Text>
            <Pressable style={styles.resetButton} onPress={resetAll}>
              <Text style={styles.resetText}>Reinitialiser</Text>
            </Pressable>
          </View>

          <FlatList
            data={answers}
            keyExtractor={(_, index) => `q-${index + 1}`}
            contentContainerStyle={styles.listContent}
            renderItem={({ item, index }) => (
              <View style={styles.row}>
                <Text style={styles.questionLabel}>Question {index + 1}</Text>
                <View style={styles.buttons}>
                  <Pressable
                    onPress={() => setAnswer(index, "correct")}
                    style={[
                      styles.answerButton,
                      item === "correct" && styles.correctActive,
                    ]}
                  >
                    <Text
                      style={[
                        styles.answerText,
                        item === "correct" && styles.answerTextActive,
                      ]}
                    >
                      Bon
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={() => setAnswer(index, "incorrect")}
                    style={[
                      styles.answerButton,
                      item === "incorrect" && styles.incorrectActive,
                    ]}
                  >
                    <Text
                      style={[
                        styles.answerText,
                        item === "incorrect" && styles.answerTextActive,
                      ]}
                    >
                      Faux
                    </Text>
                  </Pressable>
                </View>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0f172a",
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    paddingVertical: 16,
    gap: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#f8fafc",
  },
  subtitle: {
    fontSize: 14,
    color: "#cbd5f5",
  },
  score: {
    fontSize: 16,
    fontWeight: "600",
    color: "#38bdf8",
  },
  resetButton: {
    alignSelf: "flex-start",
    marginTop: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: "#1e293b",
  },
  resetText: {
    color: "#f8fafc",
    fontWeight: "600",
  },
  listContent: {
    paddingBottom: 24,
  },
  row: {
    backgroundColor: "#1e293b",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  questionLabel: {
    color: "#e2e8f0",
    fontWeight: "600",
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
  },
  answerButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#334155",
    backgroundColor: "#0f172a",
  },
  answerText: {
    color: "#e2e8f0",
    fontWeight: "600",
  },
  answerTextActive: {
    color: "#0f172a",
  },
  correctActive: {
    backgroundColor: "#22c55e",
    borderColor: "#22c55e",
  },
  incorrectActive: {
    backgroundColor: "#f97316",
    borderColor: "#f97316",
  },
});
