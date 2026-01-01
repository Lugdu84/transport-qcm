export const QCM_DATE = '12 décembre 2025';

export const QCM = [
	{
		id: 1,
		text: "Dans une SARL au capital de 10 000 €, un associé a apporté 6 000 € et le second associé, 4 000 €. Une extension de l'objet social :",
		choices: [
			{ id: 'A', label: 'sera décidée par le seul gérant' },
			{
				id: 'B',
				label: "sera décidée par le seul gérant s'il est l'associé majoritaire",
			},
			{
				id: 'C',
				label: 'sera décidée uniquement si les deux associés sont d’accord',
			},
			{
				id: 'D',
				label:
					"pourra être décidée par l'associé majoritaire, mais obligatoirement au cours d'une assemblée générale",
			},
		],
		resolution: 'C',
	},
	{
		id: 2,
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
		id: 3,
		text: "Pierre possède 20 % du capital d'une SARL :",
		choices: [
			{
				id: 'A',
				label:
					"le capital social de la société ne pourra pas être augmenté s'il s'y oppose",
			},
			{
				id: 'B',
				label:
					"il ne sera pas dans l'obligation d'y contribuer s'il y est opposé",
			},
			{
				id: 'C',
				label: "il devra se plier à la décision de l'assemblée générale",
			},
			{
				id: 'D',
				label:
					"il pourra décider seul d'augmenter sa participation au capital social sans que les autres associés ne puissent s'y opposer",
			},
		],
		resolution: 'C',
	},
	{
		id: 4,
		text: 'Dans une EURL ( entreprise unipersonnelle à responsabilité limitée ) :',
		choices: [
			{
				id: 'A',
				label:
					"les bénéfices sont toujours prélevés en totalité par l'associé unique",
			},
			{
				id: 'B',
				label:
					"l'associé unique est responsable des pertes dans la limite de ses apports",
			},
			{
				id: 'C',
				label:
					'les bénéfices ne peuvent être distribués pendant les deux premières années',
			},
			{
				id: 'D',
				label:
					'les pertes viennent directement et obligatoirement abaisser le capital social',
			},
		],
		resolution: 'B',
	},
	{
		id: 5,
		text: "Président d'une SASU, je peux fixer le siège de ma société à mon domicile, alors que je suis locataire :",
		choices: [
			{ id: 'A', label: 'sans limitation de temps' },
			{ id: 'B', label: 'pour une durée maximale de 3 ans' },
			{ id: 'C', label: "avec l'accord de mon propriétaire" },
			{
				id: 'D',
				label: 'en informant simplement mon propriétaire',
			},
		],
		resolution: 'D',
	},
	{
		id: 6,
		text: "Le numéro d'identification de la personne physique ou morale et du lieu d'établissement est :",
		choices: [
			{ id: 'A', label: 'le n° SIREN' },
			{ id: 'B', label: 'le n° SIRENE' },
			{ id: 'C', label: 'le n° SIRET' },
			{ id: 'D', label: 'le code APE' },
		],
		resolution: 'C',
	},
	{
		id: 7,
		text: 'Une entreprise :',
		choices: [
			{
				id: 'A',
				label:
					'peut se voir attribuer plusieurs codes APE si elle exerce plusieurs activités',
			},
			{
				id: 'B',
				label: "ne peut se voir attribuer qu'un seul code APE",
			},
			{
				id: 'C',
				label:
					'a obligatoirement un code APE “ transport “ dès lors qu’elle exerce une activité de transport public',
			},
			{
				id: 'D',
				label:
					'se voit attribuer un code APE pour chacun de ses établissements',
			},
		],
		resolution: 'B',
	},
	{
		id: 8,
		text: 'Un mineur :',
		choices: [
			{ id: 'A', label: 'ne possède pas de patrimoine' },
			{
				id: 'B',
				label:
					'peut posséder des biens, mais ce sont ses parents ou tuteurs qui exercent ses droits',
			},
			{
				id: 'C',
				label: 'ne peut pas posséder de biens mais possède des droits',
			},
			{
				id: 'D',
				label:
					'ne peut pas posséder de biens mais possède tous les droits d’une personne juridique',
			},
		],
		resolution: 'B',
	},
	{
		id: 9,
		text: 'Un mineur :',
		choices: [
			{
				id: 'A',
				label: 'ne peut pas être associé dans une société de capitaux',
			},
			{ id: 'B', label: 'est incapable juridiquement' },
			{ id: 'C', label: 'ne peut posséder aucun patrimoine' },
			{
				id: 'D',
				label:
					'ne peut pas posséder de biens mais peut signer un acte juridique',
			},
		],
		resolution: 'B',
	},
	{
		id: 10,
		text: 'Dans une SARL ( société à responsabilité limitée ), les associés :',
		choices: [
			{
				id: 'A',
				label: 'ne sont responsables que dans la limite de leurs apports',
			},
			{
				id: 'B',
				label: 'sont responsables sur l’ensemble des biens',
			},
			{
				id: 'C',
				label: 'ne sont responsables que de leurs dettes personnelles',
			},
			{
				id: 'D',
				label: 'sont solidairement et indéfiniment responsables',
			},
		],
		resolution: 'A',
	},
	{
		id: 11,
		text: "Dans le cas d'un chèque certifié, la banque :",
		choices: [
			{
				id: 'A',
				label:
					'ne fait que constater que le compte est approvisionné au moment de la certification',
			},
			{ id: 'B', label: 'paye immédiatement le bénéficiaire' },
			{
				id: 'C',
				label:
					'bloque la provision pendant le délai légal de présentation du chèque',
			},
			{
				id: 'D',
				label: "s'engage à le payer, quelle que soit sa date de présentation",
			},
		],
		resolution: 'C',
	},
	{
		id: 12,
		text: "Dans les statuts d'une SARL ( société à responsabilité limitée ), il n'est pas obligatoire de mentionner :",
		choices: [
			{ id: 'A', label: 'la durée de la société' },
			{ id: 'B', label: "l'objet social" },
			{ id: 'C', label: 'le siège social' },
			{ id: 'D', label: 'le nom du gérant' },
		],
		resolution: 'D',
	},
	{
		id: 13,
		text: 'Vous venez de constituer une SASU et vous avez constitué le capital social en faisant l’apport d’un véhicule vous appartenant :',
		choices: [
			{
				id: 'A',
				label:
					"vous devez fournir au greffe le rapport d'un commissaire aux apports",
			},
			{
				id: 'B',
				label:
					"vous devez fournir au greffe le rapport d'un commissaire aux comptes",
			},
			{
				id: 'C',
				label:
					'vous devez simplement fournir le duplicata de la carte grise du véhicule et de la facture d’acquisition',
			},
			{
				id: 'D',
				label:
					'vous devez obligatoirement compléter le capital social par un apport en numéraire',
			},
		],
		resolution: 'A',
	},
	{
		id: 14,
		text: "Sur les factures d'une entreprise figure le numéro suivant : FR 53 228 330 684. Il s'agit :",
		choices: [
			{ id: 'A', label: 'de son code APE' },
			{ id: 'B', label: 'de son n° siren' },
			{ id: 'C', label: 'de son n° siret' },
			{ id: 'D', label: 'de son n° de tva intracommunautaire' },
		],
		resolution: 'D',
	},
	{
		id: 15,
		text: 'Le document qui permet de planifier les moyens à mettre en oeuvre pour atteindre des objectifs est :',
		choices: [
			{ id: 'A', label: 'un compte de résultat prévisionnel' },
			{ id: 'B', label: 'un business plan' },
			{ id: 'C', label: 'une étude de marché' },
			{ id: 'D', label: 'un plan marketing' },
		],
		resolution: 'B',
	},
	{
		id: 16,
		text: 'Pour fixer vos tarifs :',
		choices: [
			{
				id: 'A',
				label:
					'vous tenez compte uniquement de vos prix de revient et vous appliquez un taux de marge',
			},
			{
				id: 'B',
				label: 'vous demandez conseil au CNR ( Comité National Routier )',
			},
			{
				id: 'C',
				label: 'vous prenez en compte vos coûts et les tarifs de vos confrères',
			},
			{ id: 'D', label: 'vous devez appliquer le tarif syndical' },
		],
		resolution: 'C',
	},
	{
		id: 17,
		text: 'Sur un document matérialisant un contrat de transport intérieur, une déclaration de valeur permet :',
		choices: [
			{
				id: 'A',
				label:
					"d'assurer le donneur d'ordre pour la marchandise transportée indépendamment de l'assurance responsabilité contractuelle du transporteur",
			},
			{
				id: 'B',
				label:
					"d'élever la limitation d'indemnité de responsabilité du transporteur au montant de la valeur déclarée en cas de perte ou d'avarie",
			},
			{
				id: 'C',
				label:
					"d'élever la limitation d'indemnité de responsabilité du transporteur au montant de la valeur déclarée en cas de retard à la livraison",
			},
			{
				id: 'D',
				label:
					"de constituer l'indemnité forfaitaire que l'assureur du transporteur versera au donneur d'ordre en cas de perte ou d'avarie",
			},
		],
		resolution: 'B',
	},
	{
		id: 18,
		text: "En transport international ( CMR ), l'indemnité pour perte partielle de la marchandise est fixée à :",
		choices: [
			{
				id: 'A',
				label:
					'8,33 DTS ( droits de tirage spéciaux ) par tonne du poids brut manquant',
			},
			{
				id: 'B',
				label: '8,33 DTS par kilogramme de poids brut manquant',
			},
			{
				id: 'C',
				label: '1 800 € par tonne de poids brut manquant',
			},
			{ id: 'D', label: '45 000 € par chargement' },
		],
		resolution: 'B',
	},
	{
		id: 19,
		text: 'Le montant des capitaux propres exigé par la DREAL au titre de la capacité financière :',
		choices: [
			{
				id: 'A',
				label:
					'doit être déposé sur un compte bloqué pendant la durée de validité des licences',
			},
			{
				id: 'B',
				label:
					'doit se trouver en permanence sur le compte bancaire de l’entreprise',
			},
			{ id: 'C', label: 'est fonction du nombre de véhicules' },
			{ id: 'D', label: 'est vérifié tous les 5 ans par la DREAL' },
		],
		resolution: 'C',
	},
	{
		id: 20,
		text: 'Pour exercer une activité de transport public routier, il faut remplir :',
		choices: [
			{
				id: 'A',
				label:
					'une condition de capacité professionnelle et une condition de capacité financière',
			},
			{
				id: 'B',
				label:
					"une condition de capacité professionnelle, une condition d'honorabilité, puis ensuite, une condition de capacité financière",
			},
			{
				id: 'C',
				label:
					'une triple condition : capacité professionnelle, capacité financière et honorabilité',
			},
			{
				id: 'D',
				label:
					"une condition de capacité professionnelle, une condition de capacité financière, une condition d'honorabilité, mais également une condition d'établissement",
			},
		],
		resolution: 'D',
	},
	{
		id: 21,
		text: 'Le titre administratif de transport délivré à une entreprise exploitant uniquement des véhicules motorisés de moins de 4 roues est :',
		choices: [
			{ id: 'A', label: 'une licence communautaire' },
			{ id: 'B', label: 'une CMR' },
			{ id: 'C', label: 'une licence de transport intérieur' },
			{ id: 'D', label: 'une lettre de voiture' },
		],
		resolution: 'C',
	},
	{
		id: 22,
		text: "La condition d'honorabilité :",
		choices: [
			{
				id: 'A',
				label:
					"est vérifiée par la DREAL uniquement au moment de la demande d'autorisation d'exercer",
			},
			{
				id: 'B',
				label: 'concerne uniquement le gestionnaire de transport',
			},
			{
				id: 'C',
				label: 'concerne le gestionnaire de transport et tous les dirigeants',
			},
			{
				id: 'D',
				label:
					"dont est attestée par la fourniture d'un extrait de casier judiciaire à joindre au dossier de demande d'autorisation d'exercer",
			},
		],
		resolution: 'C',
	},
	{
		id: 23,
		text: "Le respect de la condition de capacité financière d'une entreprise inscrite au registre des transporteurs publics routiers de marchandises est fonction du :",
		choices: [
			{ id: 'A', label: "fonds de roulement de l'entreprise" },
			{
				id: 'B',
				label: "montant des capitaux propres de l'entreprise",
			},
			{
				id: 'C',
				label: "du montant des capitaux permanents de l'entreprise",
			},
			{ id: 'D', label: "chiffre d'affaires du dernier exercice" },
		],
		resolution: 'B',
	},
	{
		id: 24,
		text: 'Vous disposez de 6 000 € et vous souhaitez obtenir 10 copies conformes de licence de transport intérieur. Le montant maximal de la garantie bancaire que pourra accepter la DREAL sera de :',
		choices: [
			{ id: 'A', label: '3 000 €' },
			{ id: 'B', label: '3 900 €' },
			{ id: 'C', label: '4 950 €' },
			{ id: 'D', label: '9 900 €' },
		],
		resolution: 'C',
	},
	{
		id: 25,
		text: 'Dans une entreprise de transport, le gestionnaire de transport :',
		choices: [
			{ id: 'A', label: 'doit être un mandataire social' },
			{ id: 'B', label: 'doit être un salarié, cadre' },
			{ id: 'C', label: 'peut être un gestionnaire externe' },
			{
				id: 'D',
				label:
					"est obligatoirement le chef d'entreprise dans une entreprise individuelle",
			},
		],
		resolution: 'C',
	},
	{
		id: 26,
		text: "L'attestation de capacité :",
		choices: [
			{ id: 'A', label: 'est valable 5 ans' },
			{ id: 'B', label: 'doit être renouvelée tous les 5 ans' },
			{ id: 'C', label: 'nécessite un recyclage tous les 5 ans' },
			{
				id: 'D',
				label:
					"peut nécessiter un recyclage si elle n'a pas été utilisée depuis plus de 5 ans",
			},
		],
		resolution: 'D',
	},
	{
		id: 27,
		text: "L'autorisation d'exercer la profession de transporteur routier permet à :",
		choices: [
			{
				id: 'A',
				label:
					'une personne d’obtenir une attestation de capacité professionnelle',
			},
			{
				id: 'B',
				label:
					'une entreprise de satisfaire à la condition de capacité professionnelle',
			},
			{
				id: 'C',
				label:
					'une entreprise d’être inscrite au registre des entreprises de transport',
			},
			{
				id: 'D',
				label:
					'un gestionnaire de transport d’exercer la profession de transporteur routier',
			},
		],
		resolution: 'C',
	},
	{
		id: 28,
		text: 'En transport national, le destinataire a reçu ses marchandises le jeudi à 11 h. En cas de dommage constaté à la livraison, il doit confirmer par écrit ses réserves au transporteur au plus tard le :',
		choices: [
			{ id: 'A', label: 'dimanche à 24 h' },
			{ id: 'B', label: 'lundi à 11 h' },
			{ id: 'C', label: 'lundi à 24 h' },
			{ id: 'D', label: 'mardi à 11 h' },
		],
		resolution: 'C',
	},
	{
		id: 29,
		text: 'En transport national, un destinataire constate, le jour de la livraison, des avaries sur la marchandise. La durée de la prescription de son action est de :',
		choices: [
			{ id: 'A', label: '6 mois' },
			{ id: 'B', label: '1 an' },
			{ id: 'C', label: '2 ans' },
			{ id: 'D', label: '3 ans' },
		],
		resolution: 'B',
	},
	{
		id: 30,
		text: "L'achat d'un véhicule avec l'argent disponible sur un compte en banque :",
		choices: [
			{
				id: 'A',
				label: "augmente le montant de l'actif et celui du passif",
			},
			{ id: 'B', label: "augmente le montant de l'actif uniquement" },
			{ id: 'C', label: 'augmente le montant du passif uniquement' },
			{ id: 'D', label: "n'augmente ni l'actif ni le passif" },
		],
		resolution: 'D',
	},
	{
		id: 31,
		text: 'Les dividendes sont :',
		choices: [
			{
				id: 'A',
				label:
					'la partie du bénéfice qui est inscrite dans un compte de réserves',
			},
			{
				id: 'B',
				label: 'la partie du bénéfice que se partagent les associés',
			},
			{ id: 'C', label: 'la rémunération du gérant' },
			{ id: 'D', label: 'répartis selon le choix du gérant' },
		],
		resolution: 'B',
	},
	{
		id: 32,
		text: "Dans le calcul d'un prix de revient, les assurances du bâtiment s'imputent :",
		choices: [
			{ id: 'A', label: 'dans les charges variables' },
			{ id: 'B', label: 'dans les charges directes' },
			{ id: 'C', label: 'dans les charges de structure' },
			{ id: 'D', label: 'dans les charges fixes du véhicule' },
		],
		resolution: 'C',
	},
	{
		id: 33,
		text: 'Les loyers des véhicules pris en location sont enregistrés :',
		choices: [
			{ id: 'A', label: 'au passif du bilan' },
			{ id: 'B', label: 'dans les charges exceptionnelles' },
			{ id: 'C', label: "dans les charges d'exploitation" },
			{ id: 'D', label: 'dans les charges financières' },
		],
		resolution: 'C',
	},
	{
		id: 34,
		text: 'Le seuil de rentabilité est atteint lorsque :',
		choices: [
			{
				id: 'A',
				label: 'l’entreprise dégage sa marge bénéficiaire prévisionnelle',
			},
			{
				id: 'B',
				label: "le chiffre d'affaires permet de couvrir les charges fixes",
			},
			{
				id: 'C',
				label: "le chiffre d'affaires permet de couvrir toutes les charges",
			},
			{
				id: 'D',
				label: "le chiffre d'affaires permet de couvrir les charges sociales",
			},
		],
		resolution: 'C',
	},
	{
		id: 35,
		text: "Une convention collective devient d'application obligatoire à l'ensemble d'une branche professionnelle quand elle est “ étendue ” par :",
		choices: [
			{ id: 'A', label: 'arrêté du Ministre des transports' },
			{ id: 'B', label: 'arrêté du Ministre du travail' },
			{ id: 'C', label: "l'inspection du travail" },
			{ id: 'D', label: 'le Préfet de région' },
		],
		resolution: 'B',
	},
	{
		id: 36,
		text: 'Dans la convention collective des transports, les conducteurs sont classés dans la catégorie :',
		choices: [
			{ id: 'A', label: 'ouvriers' },
			{ id: 'B', label: 'employés' },
			{ id: 'C', label: 'agents de maîtrise' },
			{ id: 'D', label: 'cadres' },
		],
		resolution: 'A',
	},
	{
		id: 37,
		text: 'La convention collective des transports prévoit une augmentation des salaires conventionnels marchandises en fonction de l’ancienneté :',
		choices: [
			{ id: 'A', label: '2 % tous les ans' },
			{ id: 'B', label: '1 % tous les 2 ans' },
			{ id: 'C', label: '2 % après 2 ans' },
			{ id: 'D', label: '5 % après 5 ans' },
		],
		resolution: 'C',
	},
	{
		id: 38,
		text: 'Il est interdit de recourir à un contrat à durée déterminée pour remplacer :',
		choices: [
			{
				id: 'A',
				label: 'un salarié absent suite à un accident du travail',
			},
			{ id: 'B', label: 'un salarié en grève' },
			{
				id: 'C',
				label:
					'un salarié en cas de départ définitif précédant la suppression de son poste de travail',
			},
			{ id: 'D', label: 'une salariée absente pour congé de maternité' },
		],
		resolution: 'B',
	},
	{
		id: 39,
		text: "Pour la mise en oeuvre du bulletin de paie électronique, l'employeur a besoin de l'accord du salarié :",
		choices: [
			{ id: 'A', label: 'oui, sans accord écrit du salarié' },
			{ id: 'B', label: 'oui, avec accord écrit du salarié' },
			{ id: 'C', label: 'non, sans formalité' },
			{ id: 'D', label: "non, mais interdit si le salarié s'y oppose" },
		],
		resolution: 'D',
	},
	{
		id: 40,
		text: 'Quand un conducteur salarié travaille entre minuit et 5 heures du matin :',
		choices: [
			{ id: 'A', label: 'son amplitude est limitée à 12 heures' },
			{ id: 'B', label: 'son temps de service est limité à 12 heures' },
			{ id: 'C', label: 'son amplitude est limitée à 10 heures' },
			{ id: 'D', label: 'son temps de service est limité à 10 heures' },
		],
		resolution: 'D',
	},
	{
		id: 41,
		text: 'Un conducteur qui a effectué 4 heures de travail le dimanche dans une entreprise de transport routier, doit être rémunéré suivant :',
		choices: [
			{
				id: 'A',
				label: 'une majoration de 25% des heures effectuées le dimanche',
			},
			{
				id: 'B',
				label: 'un paiement double des heures effectuées le dimanche',
			},
			{
				id: 'C',
				label: 'une récupération des heures effectuées le dimanche',
			},
			{
				id: 'D',
				label:
					'une indemnité forfaitaire conventionnelle en plus du paiement des heures effectuées le dimanche',
			},
		],
		resolution: 'D',
	},
	{
		id: 42,
		text: 'La 44 ème heure de travail hebdomadaire pour un conducteur routier, est majorée de :',
		choices: [
			{ id: 'A', label: '25 %' },
			{ id: 'B', label: '33 %' },
			{ id: 'C', label: '50 %' },
			{ id: 'D', label: '75 %' },
		],
		resolution: 'C',
	},
	{
		id: 43,
		text: 'Dans toute entreprise ayant au moins un salarié, il doit être établi un document unique d’évaluation des risques pour la sécurité et la santé des travailleurs. Ce document doit être établi par :',
		choices: [
			{ id: 'A', label: "l'employeur" },
			{ id: 'B', label: 'le médecin du travail' },
			{ id: 'C', label: "l'inspecteur du travail" },
			{ id: 'D', label: "la CRAM ( Caisse Régionale d'Assurance Maladie )" },
		],
		resolution: 'A',
	},
	{
		id: 44,
		text: 'Sauf dérogation, la durée maximale d’un contrat à durée déterminée, renouvellement compris, conclu pour un surcroît exceptionnel d’activité est de :',
		choices: [
			{ id: 'A', label: '6 mois' },
			{ id: 'B', label: '12 mois' },
			{ id: 'C', label: '18 mois' },
			{ id: 'D', label: '24 mois' },
		],
		resolution: 'C',
	},
	{
		id: 45,
		text: "Un conducteur a été contrôlé à l'éthylomètre avec un taux d'alcoolémie de 0,26 mg par litre d'air expiré. Il lui sera retiré :",
		choices: [
			{ id: 'A', label: "0 point, il n'est pas en infraction" },
			{ id: 'B', label: '3 points' },
			{ id: 'C', label: '4 points' },
			{ id: 'D', label: '6 points' },
		],
		resolution: 'D',
	},
	{
		id: 46,
		text: 'La surcharge d’un véhicule constatée à l’occasion d’une pesée, entraîne sur le permis de conduire, un retrait de :',
		choices: [
			{ id: 'A', label: '0 point' },
			{ id: 'B', label: '1 point' },
			{ id: 'C', label: '2 points' },
			{ id: 'D', label: '3 points' },
		],
		resolution: 'A',
	},
	{
		id: 47,
		text: 'Une de ces mentions ne figure pas sur les cartes grises. Laquelle ?',
		choices: [
			{ id: 'A', label: 'le poids à vide' },
			{ id: 'B', label: 'le poids total autorisé en charge' },
			{ id: 'C', label: 'le nombre de places assises' },
			{ id: 'D', label: 'la charge utile' },
		],
		resolution: 'D',
	},
	{
		id: 48,
		text: 'Votre conducteur de messagerie est dispensé du port de la ceinture de sécurité :',
		choices: [
			{
				id: 'A',
				label: 'il doit toujours boucler sa ceinture de sécurité',
			},
			{ id: 'B', label: 'en dehors des autoroutes' },
			{ id: 'C', label: 'en agglomération' },
			{
				id: 'D',
				label: "s'il effectue des livraisons en porte-à-porte en zone urbaine",
			},
		],
		resolution: 'D',
	},
	{
		id: 49,
		text: 'En cas de perte de points, la participation à un stage permet d’en récupérer :',
		choices: [
			{ id: 'A', label: '1' },
			{ id: 'B', label: '3 au maximum' },
			{ id: 'C', label: '4 au maximum' },
			{ id: 'D', label: '12 au maximum' },
		],
		resolution: 'C',
	},
	{
		id: 50,
		text: 'La licence de transport intérieur mentionne le poids limite de 3,5 tonnes. Il s’agit :',
		choices: [
			{ id: 'A', label: 'du poids à vide du véhicule' },
			{ id: 'B', label: 'de son PTAC' },
			{ id: 'C', label: 'de son PTRA' },
			{ id: 'D', label: 'de son PMA' },
		],
		resolution: 'D',
	},
];
