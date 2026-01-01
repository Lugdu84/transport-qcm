import { Link } from 'expo-router';
import { QCMS } from '@/data/qcms';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.safeArea}>
				<View style={styles.container}>
					<View style={styles.header}>
						<Text style={styles.title}>Liste des QCM</Text>
						<Text style={styles.subtitle}>
							Selectionnez un QCM pour commencer l&apos;examen.
						</Text>
					</View>

					<FlatList
						data={QCMS}
						keyExtractor={(item) => item.id}
						contentContainerStyle={styles.listContent}
						renderItem={({ item }) => (
							<Link
								href={{ pathname: '/qcm/[id]', params: { id: item.id } }}
								asChild>
								<Pressable style={styles.qcmCard}>
									<Text style={styles.qcmTitle}>
										QCM du {item.dateLabel}
									</Text>
									<Text style={styles.chevron}>{'>'}</Text>
								</Pressable>
							</Link>
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
		backgroundColor: '#0f172a',
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
		fontWeight: '700',
		color: '#f8fafc',
	},
	subtitle: {
		fontSize: 14,
		color: '#cbd5f5',
	},
	listContent: {
		paddingBottom: 24,
		gap: 12,
	},
	qcmCard: {
		backgroundColor: '#1e293b',
		borderRadius: 12,
		padding: 14,
		borderWidth: 1,
		borderColor: '#334155',
		gap: 6,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	qcmTitle: {
		color: '#f8fafc',
		fontSize: 18,
		fontWeight: '700',
	},
	chevron: {
		color: '#94a3b8',
		fontSize: 20,
		fontWeight: '700',
	},
});
