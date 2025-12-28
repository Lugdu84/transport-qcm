import { useMemo, useRef, useState } from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import {
	FlatList,
	Pressable,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import ExamTimer from '@/components/ExamTimer';
import Question, { QuestionData } from '@/components/Question';
import { QCM as QCM_1, QCM_DATE } from '@/data/qcm-1';

const QCMS: Record<string, { dateLabel: string; questions: QuestionData[] }> = {
	'qcm-1': {
		dateLabel: QCM_DATE,
		questions: QCM_1,
	},
};

export default function QcmScreen() {
	const { id } = useLocalSearchParams<{ id: string }>();
	const qcm = id ? QCMS[id] : undefined;
	const [answers, setAnswers] = useState<Record<number, string | null>>({});
	const [showResults, setShowResults] = useState(false);
	const listRef = useRef<FlatList<QuestionData>>(null);

	if (!qcm) {
		return (
			<SafeAreaProvider>
				<SafeAreaView style={styles.safeArea}>
					<View style={styles.container}>
						<Text style={styles.title}>QCM introuvable</Text>
					</View>
				</SafeAreaView>
			</SafeAreaProvider>
		);
	}

	const results = useMemo(() => {
		let correct = 0;
		let incorrect = 0;
		let gradable = 0;
		for (const question of qcm.questions) {
			if (!question.resolution) continue;
			gradable += 1;
			const answer = answers[question.id] ?? null;
			if (!answer) continue;
			if (answer === question.resolution) {
				correct += 1;
			} else {
				incorrect += 1;
			}
		}
		return {
			correct,
			incorrect,
			score: correct * 2,
			total: gradable * 2,
		};
	}, [answers, qcm.questions]);

	const handleAnswer = (questionId: number, choiceId: string) => {
		setAnswers((prev) => {
			const current = prev[questionId] ?? null;
			const next = current === choiceId ? null : choiceId;
			return { ...prev, [questionId]: next };
		});
	};

	const handleValidate = () => {
		setShowResults(true);
		listRef.current?.scrollToOffset({ offset: 0, animated: true });
	};

	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.safeArea}>
				<Stack.Screen options={{ title: `QCM du ${qcm.dateLabel}` }} />
				<View style={styles.container}>
					<Text style={styles.title}>QCM du {qcm.dateLabel}</Text>
					<ExamTimer />
					{showResults && (
						<View style={styles.summaryCard}>
							<Text style={styles.summaryLabel}>
								Bonnes reponses: {results.correct}
							</Text>
							<Text style={styles.summaryLabel}>
								Mauvaises reponses: {results.incorrect}
							</Text>
							<Text style={styles.summaryScore}>
								Note: {results.score} / {results.total}
							</Text>
						</View>
					)}
					<FlatList
						ref={listRef}
						data={qcm.questions}
						keyExtractor={(item) => String(item.id)}
						contentContainerStyle={styles.listContent}
						renderItem={({ item }) => (
							<Question
								question={item}
								selectedId={answers[item.id] ?? null}
								onAnswer={(choiceId) => handleAnswer(item.id, choiceId)}
								showResults={showResults}
							/>
						)}
						ListFooterComponent={
							<Pressable
								style={[
									styles.validateButton,
									showResults && styles.validateButtonDisabled,
								]}
								onPress={handleValidate}
								disabled={showResults}
							>
								<Text
									style={[
										styles.validateButtonText,
										showResults && styles.validateButtonTextDisabled,
									]}
								>
									{showResults ? 'Resultats affiches' : 'Valider le QCM'}
								</Text>
							</Pressable>
						}
					/>
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#0f172a',
	},
	container: {
		flex: 1,
		paddingHorizontal: 16,
		paddingVertical: 16,
		gap: 12,
	},
	title: {
		fontSize: 20,
		fontWeight: '700',
		color: '#f8fafc',
	},
	listContent: {
		gap: 12,
		paddingBottom: 24,
	},
	summaryCard: {
		backgroundColor: '#0b1220',
		borderRadius: 16,
		padding: 16,
		borderWidth: 1,
		borderColor: '#1e293b',
		gap: 6,
	},
	summaryLabel: {
		color: '#e2e8f0',
		fontWeight: '600',
	},
	summaryScore: {
		color: '#38bdf8',
		fontWeight: '700',
		fontSize: 16,
	},
	validateButton: {
		marginTop: 8,
		paddingVertical: 12,
		borderRadius: 12,
		alignItems: 'center',
		backgroundColor: '#38bdf8',
	},
	validateButtonDisabled: {
		backgroundColor: '#334155',
	},
	validateButtonText: {
		color: '#0f172a',
		fontWeight: '700',
	},
	validateButtonTextDisabled: {
		color: '#e2e8f0',
	},
});
