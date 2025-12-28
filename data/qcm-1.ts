export const QCM_DATE = '4 juillet 2025';

export const QCM = [
	{
		id: 1,
		text: 'Les propriétaires d’une SARL sont :',
		choices: [
			{ id: 'A', label: 'les associés' },
			{ id: 'B', label: 'le ou les gérants' },
			{ id: 'C', label: 'les actionnaires' },
			{ id: 'D', label: 'les membres du conseil d’administration' },
		],
		resolution: 'A',
	},
	{
		id: 2,
		text: "Lors de la création d'une société de capitaux, l'argent constituant le capital social libéré :",
		choices: [
			{
				id: 'A',
				label:
					'reste bloqué pendant toute la durée de vie de la société sur un compte en banque spécial :',
			},
			{
				id: 'B',
				label:
					"reste bloqué uniquement pendant l'accomplissement des formalités création et est ensuite disponible pour rembourser les associés",
			},
			{
				id: 'C',
				label:
					"reste bloqué uniquement pendant l'accomplissement des formalités de création et est ensuite disponible pour les besoins de la société",
			},
			{
				id: 'D',
				label: "est fictif et n'est jamais disponible pour la société",
			},
		],
		resolution: 'C',
	},
	{
		id: 3,
		text: "Parmi les quatre mentions figurant ci-dessous, une mention doit figurer obligatoirement dans les statuts d'une société :",
		choices: [
			{ id: 'A', label: "l'objet social de la société" },
			{ id: 'B', label: 'le régime fiscal adopté par la société' },
			{ id: 'C', label: 'le code APE' },
			{ id: 'D', label: 'le nom du ou des gérants de la société' },
		],
		resolution: 'A',
	},
	{
		id: 4,
		text: 'Dans une EURL ( entreprise unipersonnelle à responsabilité limitée ) le gérant associé unique est responsable :',
		choices: [
			{ id: 'A', label: 'de la totalité des dettes sociales' },
			{ id: 'B', label: 'des dettes sociales sur ses biens personnels' },
			{ id: 'C', label: 'des dettes sociales à concurrence de ses apports' },
			{
				id: 'D',
				label:
					"des dettes sociales à concurrence de son chiffre d'affaires annuel",
			},
		],
		resolution: 'C',
	},
	{
		id: 5,
		text: 'Vous souhaitez créer votre entreprise. Vous voulez être seul et bénéficier du régime social des salariés. Vous devez opter pour :',
		choices: [
			{ id: 'A', label: 'une EI ( entreprise individuelle )' },
			{ id: 'B', label: 'une auto-entreprise' },
			{ id: 'C', label: 'une SASU' },
			{ id: 'D', label: 'une EURL' },
		],
		resolution: 'C',
	},
	{
		id: 6,
		text: 'Le gérant d’une SARL possède 50 % du capital social et son épouse 20 % :',
		choices: [
			{
				id: 'A',
				label: 'il est majoritaire au cours des Assemblées Générales',
			},
			{
				id: 'B',
				label:
					"Il est considéré comme salarié par les organismes sociaux puisqu'il ne possède pas plus de la moitié du capital social",
			},
			{
				id: 'C',
				label:
					'il est obligatoirement affilié à la sécurité sociale des indépendants ( SSI - anciennement RSI ) puisque considéré comme gérant majoritaire',
			},
			{
				id: 'D',
				label:
					"il peut choisir d’être affilié à la sécurité sociale des indépendants ou au régime des salariés puisqu'il ne possède que 50 % du capital social",
			},
		],
		resolution: 'C',
	},
	{
		id: 7,
		text: "Dans une société de capitaux, l'approbation des comptes annuels est effectuée par :",
		choices: [
			{ id: 'A', label: "l'assemblée générale ordinaire ( AGO )" },
			{ id: 'B', label: "l'assemblée générale extraordinaire ( AGE )" },
			{ id: 'C', label: 'le gérant' },
			{ id: 'D', label: 'le commissaire aux comptes' },
		],
		resolution: 'A',
	},
	{
		id: 8,
		text: "Dans les statuts d'une SARL ( société à responsabilité limitée ), il est obligatoire de mentionner :",
		choices: [
			{ id: 'A', label: "l'option pour l'impôt sur les sociétés ( IS )" },
			{ id: 'B', label: "l'option pour l'impôt sur le revenu ( IR )" },
			{ id: 'C', label: 'la répartition des bénéfices' },
			{ id: 'D', label: 'la durée de la société' },
		],
		resolution: 'D',
	},
	{
		id: 9,
		text: 'Une société à responsabilité limitée ( SARL ) est dite de personnes lorsque :',
		choices: [
			{
				id: 'A',
				label: 'les décisions sont prises à la majorité des voix des associés',
			},
			{
				id: 'B',
				label: "les décisions sont prises à l'unanimité des associés",
			},
			{ id: 'C', label: 'les décisions sont prises par le gérant seul' },
			{
				id: 'D',
				label: "les décisions sont prises par un conseil d'administration",
			},
		],
		resolution: 'A',
	},
	{
		id: 10,
		text: "Une SARL a été créée avec un capital social de 2 000 € divisé en 100 parts sociales de 20 €. A la fin du premier exercice, social, le bénéfice est de 1 000 €. Si l'Assemblée Générale décide de se distribuer la totalité du bénéfice, quel sera le montant du dividende auquel donnera droit une part sociale ?",
		choices: [
			{ id: 'A', label: '9,50 €' },
			{ id: 'B', label: '10 €' },
			{ id: 'C', label: '20 €' },
			{
				id: 'D',
				label: "interdit tant que la réserve légale n'atteint pas 200 € ",
			},
		],
		resolution: 'A',
	},
	{
		id: 11,
		text: 'Le registre du commerce est tenu par :',
		choices: [
			{ id: 'A', label: 'le Greffe du Tribunal de commerce' },
			{ id: 'B', label: 'le CFE ( Centre de Formalités des Entreprises )' },
			{ id: 'C', label: 'la DREAL' },
			{ id: 'D', label: "l'INSEE" },
		],
		resolution: 'A',
	},
	{
		id: 12,
		text: 'COURS Le numéro SIREN est attribué par :',
		choices: [
			{ id: 'A', label: 'le CFE' },
			{ id: 'B', label: 'le greffe du Tribunal de commerce' },
			{ id: 'C', label: "l'URSSAF" },
			{ id: 'D', label: "l'INSEE" },
		],
		resolution: 'D',
	},
	{
		id: 13,
		text: 'Une entreprise individuelle reprise par une tierce personne :',
		choices: [
			{ id: 'A', label: 'conserve le même n° SIREN' },
			{ id: 'B', label: 'ne conserve jamais le même n° SIREN' },
			{
				id: 'C',
				label:
					'ne conserve le même n° SIREN que si elle est reprise par un héritier du chef d’entreprise',
			},
			{
				id: 'D',
				label:
					"ne conserve le même n° SIREN que si elle est reprise par le conjoint du chef d'entreprise",
			},
		],
		resolution: 'B',
	},
	{
		id: 14,
		text: "Le numéro SIRET d'une entreprise est le suivant : 252 452 365 00024. Il s'agit :",
		choices: [
			{
				id: 'A',
				label:
					"du numéro SIRET du siège de l'entreprise si elle a changé d'adresse et si elle ne possède pas d'établissement secondaire",
			},
			{
				id: 'B',
				label:
					"obligatoirement du numéro SIRET d'un établissement secondaire de l'entreprise",
			},
			{ id: 'C', label: "du numéro SIRET d'une entreprise individuelle" },
			{ id: 'D', label: "du numéro SIRET d'une société anonyme" },
		],
		resolution: 'A',
	},
	{
		id: 15,
		text: "Le numéro SIRET d'une entreprise correspond :",
		choices: [
			{ id: 'A', label: "au numéro SIREN de l'entreprise" },
			{ id: 'B', label: 'au numéro de TVA intracommunautaire' },
			{ id: 'C', label: "au numéro d'identification de chaque établissement" },
			{ id: 'D', label: "au numéro d'inscription au registre du commerce" },
		],
		resolution: 'B',
	},
	{
		id: 16,
		text: 'Le numéro SIRET est composé de :',
		choices: [
			{ id: 'A', label: '7 chiffres + 5 chiffres' },
			{ id: 'B', label: '9 chiffres + 5 chiffres' },
			{ id: 'C', label: '9 chiffres + 9 chiffres' },
			{ id: 'D', label: '5 chiffres + 9 chiffres' },
		],
		resolution: 'B',
	},
	{
		id: 17,
		text: 'Le capital social d’une société anonyme est de 90 000 € ; des actions d’une valeur nominale de 100 € sont proposées à des investisseurs, actions qu’ils doivent libérer au quart lors de la souscription. On commence à parler de capitaux propres à partir :',
		choices: [
			{ id: 'A', label: 'de 90 000 €' },
			{ id: 'B', label: 'de 22 500 €' },
			{ id: 'C', label: 'de 67 500 €' },
			{ id: 'D', label: 'de 100 €' },
		],
		resolution: 'A',
	},
	{
		id: 18,
		text: 'Le capital social d’une société anonyme est de 90 000 €. Elle a émis des actions d’une valeur nominale de 100 €, qu’elle a proposées à des investisseurs. Ils ont libéré les fonds au quart lors de la souscription. Les capitaux propres de la société ont augmenté de :',
		choices: [
			{ id: 'A', label: '90 000 €' },
			{ id: 'B', label: '22 500 €' },
			{ id: 'C', label: '67 500 €' },
			{ id: 'D', label: '100 €' },
		],
		resolution: 'B',
	},
	{
		id: 19,
		text: 'Les actions à dividende prioritaire sans droit de vote :',
		choices: [
			{
				id: 'A',
				label:
					'éliminent le droit de vote mais donnent un avantage sur le dividende',
			},
			{
				id: 'B',
				label:
					'éliminent le dividende mais donnent un avantage sur le droit de vote',
			},
			{ id: 'C', label: 'éliminent le droit de vote et le dividende' },
			{ id: 'D', label: 'ne sont pas autorisées' },
		],
		resolution: 'A',
	},
	{
		id: 20,
		text: "COURS L'assemblée générale ordinaire ( AGO ) d'une société commerciale :",
		choices: [
			{
				id: 'A',
				label: 'se réunit au moins une fois par an pour approuver les comptes',
			},
			{
				id: 'B',
				label: 'se réunit uniquement en cas de modification des statuts',
			},
			{
				id: 'C',
				label: 'ne se réunit que sur demande du commissaire aux comptes',
			},
			{ id: 'D', label: 'se réunit tous les cinq ans' },
		],
		resolution: 'A',
	},
	{
		id: 21,
		text: "L’assemblée générale extraordinaire ( AGE ) d'une société commerciale :",
		choices: [
			{ id: 'A', label: 'se réunit au moins une fois par an' },
			{
				id: 'B',
				label: 'se réunit uniquement en cas de modification des statuts',
			},
			{ id: 'C', label: 'se réunit tous les cinq ans' },
			{
				id: 'D',
				label: 'ne se réunit que sur demande du commissaire aux comptes',
			},
		],
		resolution: 'A',
	},
	{
		id: 22,
		text: 'COURS La réserve légale d’une société commerciale :',
		choices: [
			{
				id: 'A',
				label:
					'est une partie du bénéfice mise en réserve pour faire face aux pertes éventuelles',
			},
			{ id: 'B', label: 'est une réserve facultative décidée par le gérant' },
			{ id: 'C', label: 'est une réserve utilisée pour payer les dividendes' },
			{ id: 'D', label: 'est une réserve qui peut être distribuée librement' },
		],
		resolution: 'D',
	},
	{
		id: 23,
		text: 'La réserve légale d’une société anonyme doit atteindre au minimum :',
		choices: [
			{ id: 'A', label: '10 % du capital social' },
			{ id: 'B', label: '20 % du capital social' },
			{ id: 'C', label: '50 % du capital social' },
			{ id: 'D', label: '100 % du capital social' },
		],
		resolution: 'A',
	},
	{
		id: 24,
		text: 'Les provisions pour risques et charges permettent :',
		choices: [
			{
				id: 'A',
				label: 'de faire apparaître un résultat supérieur à la réalité',
			},
			{ id: 'B', label: 'de lisser les résultats sur plusieurs exercices' },
			{ id: 'C', label: 'de réduire artificiellement les dettes' },
			{ id: 'D', label: 'de constituer une provision pour l’Urssaf' },
		],
		resolution: 'C',
	},
	{
		id: 25,
		text: 'COURS Le statut de conjoint collaborateur peut être choisi lorsque :',
		choices: [
			{
				id: 'A',
				label: 'le conjoint travaille dans l’entreprise sans être rémunéré',
			},
			{ id: 'B', label: 'le conjoint est salarié de l’entreprise' },
			{ id: 'C', label: 'le conjoint est associé majoritaire' },
			{ id: 'D', label: 'le conjoint est gérant' },
		],
		resolution: 'D',
	},
	{
		id: 26,
		text: 'Le statut de conjoint salarié suppose :',
		choices: [
			{ id: 'A', label: "l'existence d’un contrat de travail et d’un salaire" },
			{
				id: 'B',
				label: 'l’absence de contrat de travail mais une rémunération',
			},
			{
				id: 'C',
				label: 'l’absence de rémunération mais un contrat de travail',
			},
			{ id: 'D', label: 'aucune condition particulière' },
		],
		resolution: 'C',
	},
	{
		id: 27,
		text: 'COURS Le gérant minoritaire d’une SARL :',
		choices: [
			{ id: 'A', label: 'est affilié au régime des travailleurs non salariés' },
			{
				id: 'B',
				label: 'est affilié au régime général de la sécurité sociale',
			},
			{ id: 'C', label: 'n’a aucune protection sociale' },
			{ id: 'D', label: 'est affilié au régime des fonctionnaires' },
		],
		resolution: 'B',
	},
	{
		id: 28,
		text: 'Le gérant majoritaire d’une SARL :',
		choices: [
			{
				id: 'A',
				label: 'est affilié au régime général de la sécurité sociale',
			},
			{ id: 'B', label: 'est affilié au régime des travailleurs non salariés' },
			{ id: 'C', label: 'n’a aucune protection sociale' },
			{ id: 'D', label: 'est affilié au régime des fonctionnaires' },
		],
		resolution: 'C',
	},
	{
		id: 29,
		text: 'COURS Le statut social du dirigeant d’une EURL dépend :',
		choices: [
			{ id: 'A', label: 'du montant du capital social' },
			{ id: 'B', label: 'du nombre de salariés' },
			{ id: 'C', label: "du fait qu'il soit gérant associé unique ou non" },
			{ id: 'D', label: 'du montant du chiffre d’affaires' },
		],
		resolution: 'C',
	},
	{
		id: 30,
		text: 'Dans une entreprise individuelle, le chef d’entreprise :',
		choices: [
			{ id: 'A', label: 'est assimilé salarié' },
			{ id: 'B', label: 'est travailleur non salarié' },
			{ id: 'C', label: 'est fonctionnaire' },
			{ id: 'D', label: 'n’a aucune couverture sociale' },
		],
		resolution: 'B',
	},
	{
		id: 31,
		text: 'COURS La DUE ( déclaration unique d’embauche ) :',
		choices: [
			{ id: 'A', label: 'doit être effectuée avant l’embauche du salarié' },
			{ id: 'B', label: 'peut être faite jusqu’à un mois après l’embauche' },
			{ id: 'C', label: 'n’est pas obligatoire' },
			{ id: 'D', label: 'est réservée aux entreprises de plus de 10 salariés' },
		],
		resolution: 'C',
	},
	{
		id: 32,
		text: 'La visite médicale d’embauche :',
		choices: [
			{ id: 'A', label: 'doit être réalisée avant l’embauche' },
			{
				id: 'B',
				label: 'doit être réalisée dans les 3 mois suivant l’embauche',
			},
			{ id: 'C', label: 'n’est obligatoire que pour les CDD' },
			{ id: 'D', label: 'n’est pas obligatoire' },
		],
		resolution: 'A',
	},
	{
		id: 33,
		text: 'COURS Le contrat de travail à durée déterminée ( CDD ) :',
		choices: [
			{
				id: 'A',
				label:
					'peut être conclu pour pourvoir durablement un emploi lié à l’activité normale de l’entreprise',
			},
			{
				id: 'B',
				label:
					'ne peut être conclu que pour l’exécution d’une tâche précise et temporaire',
			},
			{ id: 'C', label: 'peut être conclu sans motif' },
			{ id: 'D', label: 'n’a pas de durée maximale' },
		],
		resolution: 'B',
	},
	{
		id: 34,
		text: 'La période d’essai d’un CDD de 6 mois est au maximum de :',
		choices: [
			{ id: 'A', label: '1 jour' },
			{ id: 'B', label: '1 semaine' },
			{ id: 'C', label: '2 semaines' },
			{ id: 'D', label: '1 mois' },
		],
		resolution: 'B',
	},
	{
		id: 35,
		text: 'COURS Le SMIC correspond :',
		choices: [
			{ id: 'A', label: 'au salaire moyen dans l’entreprise' },
			{ id: 'B', label: 'au salaire minimum interprofessionnel de croissance' },
			{ id: 'C', label: 'au salaire maximum autorisé' },
			{ id: 'D', label: 'au salaire des cadres' },
		],
		resolution: 'D',
	},
	{
		id: 36,
		text: 'La durée légale hebdomadaire du travail en France est :',
		choices: [
			{ id: 'A', label: '35 heures' },
			{ id: 'B', label: '39 heures' },
			{ id: 'C', label: '40 heures' },
			{ id: 'D', label: '48 heures' },
		],
		resolution: 'B',
	},
	{
		id: 37,
		text: 'COURS Les heures supplémentaires :',
		choices: [
			{ id: 'A', label: 'sont toujours interdites' },
			{
				id: 'B',
				label:
					'sont les heures effectuées au-delà de la durée légale hebdomadaire',
			},
			{ id: 'C', label: 'n’ouvrent droit à aucune majoration' },
			{ id: 'D', label: 'sont payées au même taux que les heures normales' },
		],
		resolution: 'A',
	},
	{
		id: 38,
		text: 'La durée maximale hebdomadaire du travail ( heures supplémentaires comprises ) ne peut dépasser :',
		choices: [
			{ id: 'A', label: '44 heures' },
			{ id: 'B', label: '48 heures' },
			{ id: 'C', label: '50 heures' },
			{ id: 'D', label: '60 heures' },
		],
		resolution: 'C',
	},
	{
		id: 39,
		text: 'COURS Le repos hebdomadaire :',
		choices: [
			{ id: 'A', label: 'peut être supprimé sans contrepartie' },
			{ id: 'B', label: 'doit être au minimum de 24 heures consécutives' },
			{ id: 'C', label: 'doit être pris uniquement le dimanche' },
			{ id: 'D', label: 'n’est pas obligatoire' },
		],
		resolution: 'C',
	},
	{
		id: 40,
		text: 'COURS L’ouverture du droit à congés payés est effective dès que le salarié a travaillé chez le même employeur :',
		choices: [
			{ id: 'A', label: '1 mois de travail effectif' },
			{ id: 'B', label: '2 semaines de travail effectif' },
			{ id: 'C', label: '10 jours de travail effectif' },
			{ id: 'D', label: 'quelle que soit la durée' },
		],
		resolution: 'D',
	},
	{
		id: 41,
		text: 'Le nombre de jours de congés payés acquis par mois de travail effectif est de :',
		choices: [
			{ id: 'A', label: '1 jour' },
			{ id: 'B', label: '2 jours' },
			{ id: 'C', label: '2,5 jours' },
			{ id: 'D', label: '3 jours' },
		],
		resolution: 'C',
	},
	{
		id: 42,
		text: 'COURS L’indemnité de congés payés est calculée sur :',
		choices: [
			{ id: 'A', label: 'le seul salaire du dernier mois' },
			{
				id: 'B',
				label:
					'la moyenne des salaires des 12 derniers mois ou le maintien du salaire, selon ce qui est le plus avantageux',
			},
			{ id: 'C', label: 'la moitié du salaire du dernier mois' },
			{ id: 'D', label: 'un forfait fixé par l’employeur' },
		],
		resolution: 'A',
	},
	{
		id: 43,
		text: 'Le licenciement pour faute grave :',
		choices: [
			{ id: 'A', label: 'ouvre droit à une indemnité de licenciement' },
			{ id: 'B', label: 'n’ouvre droit à aucune indemnité de licenciement' },
			{ id: 'C', label: 'ouvre droit au préavis' },
			{ id: 'D', label: 'ne nécessite pas de procédure particulière' },
		],
		resolution: 'D',
	},
	{
		id: 44,
		text: 'COURS Le délai de préavis en cas de démission :',
		choices: [
			{ id: 'A', label: 'est librement fixé par le salarié' },
			{
				id: 'B',
				label: 'est fixé par la convention collective ou le contrat de travail',
			},
			{ id: 'C', label: 'est toujours d’un mois' },
			{ id: 'D', label: 'n’existe pas en cas de CDI' },
		],
		resolution: 'D',
	},
	{
		id: 45,
		text: 'Le document qui récapitule les principaux éléments de la carrière du salarié à son départ de l’entreprise est :',
		choices: [
			{ id: 'A', label: 'le certificat de travail' },
			{ id: 'B', label: 'le solde de tout compte' },
			{ id: 'C', label: 'le bulletin de paie' },
			{ id: 'D', label: 'le contrat de travail' },
		],
		resolution: 'D',
	},
	{
		id: 46,
		text: 'COURS Le bulletin de paie doit mentionner obligatoirement :',
		choices: [
			{ id: 'A', label: 'le nombre d’enfants du salarié' },
			{ id: 'B', label: 'le nombre d’heures travaillées et le salaire brut' },
			{ id: 'C', label: 'l’avis du médecin du travail' },
			{ id: 'D', label: 'le montant du chiffre d’affaires de l’entreprise' },
		],
		resolution: 'B',
	},
	{
		id: 47,
		text: 'Les cotisations sociales salariales sont prélevées sur :',
		choices: [
			{ id: 'A', label: 'le salaire net' },
			{ id: 'B', label: 'le salaire brut' },
			{ id: 'C', label: 'le chiffre d’affaires' },
			{ id: 'D', label: 'les dividendes' },
		],
		resolution: 'B',
	},
	{
		id: 48,
		text: 'COURS Les cotisations sociales patronales :',
		choices: [
			{ id: 'A', label: 'sont payées par le salarié' },
			{ id: 'B', label: 'sont à la charge de l’employeur' },
			{ id: 'C', label: 'sont facultatives' },
			{
				id: 'D',
				label: 'ne concernent que les entreprises de plus de 50 salariés',
			},
		],
		resolution: 'D',
	},
	{
		id: 49,
		text: 'Le dépassement de la durée maximale de conduite journalière par un conducteur routier entraîne :',
		choices: [
			{ id: 'A', label: 'une amende' },
			{ id: 'B', label: 'un avertissement sans frais' },
			{ id: 'C', label: 'une suspension automatique du permis' },
			{ id: 'D', label: 'aucune conséquence' },
		],
		resolution: 'B',
	},
	{
		id: 50,
		text: 'La surcharge d’un véhicule constatée à l’occasion d’une pesée, entraîne sur le permis de conduire, un retrait de :',
		choices: [
			{ id: 'A', label: '0 point' },
			{ id: 'B', label: '1 point' },
			{ id: 'C', label: '2 points' },
			{ id: 'D', label: '3 points' },
		],
		resolution: 'A',
	},
];
