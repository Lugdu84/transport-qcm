import { Pressable, StyleSheet, Text, View } from "react-native";

export type QuestionChoice = {
  id: string;
  label: string;
};

export type QuestionData = {
  id: number;
  text: string;
  choices: QuestionChoice[];
  resolution?: string;
};

type QuestionProps = {
  question: QuestionData;
  selectedId: string | null;
  onAnswer?: (choiceId: string) => void;
  showResults?: boolean;
};

export default function Question({
  question,
  selectedId,
  onAnswer,
  showResults = false,
}: QuestionProps) {
  const handlePress = (choiceId: string) => {
    if (showResults) return;
    if (onAnswer) onAnswer(choiceId);
  };

  return (
    <View style={styles.card}>
      <View style={styles.questionHeader}>
        <Text style={styles.questionNumber}>{question.id}</Text>
        <Text style={styles.questionText}>{question.text}</Text>
      </View>
      <View style={styles.choices}>
        {question.choices.map((choice) => {
          const isSelected = choice.id === selectedId;
          const isCorrect =
            showResults && question.resolution === choice.id;
          const isIncorrect =
            showResults &&
            isSelected &&
            question.resolution &&
            question.resolution !== choice.id;
          const useAccentText =
            (!showResults && isSelected) || isCorrect || isIncorrect;
          return (
            <Pressable
              key={choice.id}
              onPress={() => handlePress(choice.id)}
              disabled={showResults}
              style={[
                styles.choice,
                !showResults && isSelected && styles.choiceSelected,
                isCorrect && styles.choiceCorrect,
                isIncorrect && styles.choiceIncorrect,
              ]}
            >
              <Text
                style={[styles.choiceLetter, useAccentText && styles.choiceTextSelected]}
              >
                {choice.id}.
              </Text>
              <Text
                style={[
                  styles.choiceLabel,
                  useAccentText && styles.choiceTextSelected,
                ]}
              >
                {choice.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#0b1220",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#1e293b",
  },
  questionHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    marginBottom: 12,
  },
  questionNumber: {
    minWidth: 32,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 8,
    backgroundColor: "#1e293b",
    color: "#93c5fd",
    fontWeight: "700",
    textAlign: "center",
  },
  questionText: {
    color: "#f8fafc",
    fontWeight: "700",
    fontSize: 16,
    flex: 1,
    flexWrap: "wrap",
    flexShrink: 1,
  },
  choices: {
    gap: 10,
  },
  choice: {
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-start",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#334155",
    backgroundColor: "#0f172a",
  },
  choiceSelected: {
    backgroundColor: "#38bdf8",
    borderColor: "#38bdf8",
  },
  choiceCorrect: {
    backgroundColor: "#22c55e",
    borderColor: "#22c55e",
  },
  choiceIncorrect: {
    backgroundColor: "#f97316",
    borderColor: "#f97316",
  },
  choiceLabel: {
    flex: 1,
    color: "#e2e8f0",
    fontWeight: "600",
  },
  choiceLetter: {
    color: "#cbd5f5",
    fontWeight: "700",
  },
  choiceTextSelected: {
    color: "#0f172a",
  },
});
