export default interface TravailType {
    entreprise: string;
    logoEntreprise: string;
    contrat: string;
    poste: string;
    dateDebut: string;
    dateFin?: string;
    lienEtude?: string;
    softSkills: string[];
    competenceTechnique?: string[];
    description: string;
}
