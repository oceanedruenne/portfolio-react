import '../App.css';
import Card from './Card';

export default function Projects() {
    return (
        <div className="projects">
            <h1 className="projects_title">Mes projets</h1>
            <div className="projects_cards">
                <Card title="Jeu d'échecs" text="Jeu d'échecs réalisé durant ma deuxième année de BUT Informatique." link="https://github.com/oceanedruenne/chess-game"/>
                <Card title="Jeu sur les Smart Cities" text="Jeu sérieux réalisé durant ma deuxième année de BUT Informatique." link="https://github.com/oceanedruenne/T3-Smart-Cities/tree/master"/>
                <Card title="Site internet portant sur la fibromyalgie" text="Site et étude réalisés par moi-même durant ma première année de BUT Informatique." link="https://oceanedruenne.github.io/etudeFibromyalgie/"/>
                <Card title="Site internet pour une orthophoniste" text="Projet personnel portant sur la conception d'une maquette d'un site internet pour une orthophoniste." link="https://oceanedruenne.github.io/orthophonisteobernai/"/>
                <Card title="Site internet pour une coach en communication" text="Réalisation d'un site vitrine pour une des intervenantes lors de ma remise à niveau au sein de l'UHA." link="https://oceanedruenne.github.io/coachstrasbourg/"/>
                <Card title="Réalisation d'un bot Discord" text="Réalisation d'un bot Discord représentant un personnage du jeu Guild Wars qui répond à différentes commandes." link="https://github.com/oceanedruenne/guild-wars-bot-nicho-discord"/>
                <Card title="Réalisation d'un second bot Discord" text="Réalisation d'un bot Discord qui génère des contrepèteries ainsi que leurs réponses." link="https://github.com/oceanedruenne/discord-bot-contrepeterie/tree/main"/>
            </div>
        </div>
    )
}