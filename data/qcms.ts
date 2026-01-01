import { QuestionData } from '@/components/Question';
import { QCM as QCM_1, QCM_DATE as QCM_DATE_1 } from '@/data/qcm-1';
import { QCM as QCM_2, QCM_DATE as QCM_DATE_2 } from '@/data/qcm-2';

export type QcmEntry = {
	id: string;
	dateLabel: string;
	questions: QuestionData[];
};

export const QCMS: QcmEntry[] = [
	{
		id: 'qcm-1',
		dateLabel: QCM_DATE_1,
		questions: QCM_1,
	},
	{
		id: 'qcm-2',
		dateLabel: QCM_DATE_2,
		questions: QCM_2,
	},
];

export const QCMS_BY_ID: Record<string, QcmEntry> = Object.fromEntries(
	QCMS.map((qcm) => [qcm.id, qcm]),
);
