type APILoginData = {
    token: string;
    id: string;
}

type APIStatsData = {
    recurrence: number;
    abandonsPanier: number;
    conversionsPanier: number;
    conversionsCommandes: number;
}

export { APILoginData, APIStatsData }