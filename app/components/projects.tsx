import Card from "./card";

export default function projects() {
    return (
        <section id="projects">
          <h2>Projects</h2>
          <div className="three-col">
            <Card title="Tai Lung" src="/taiLung.png" alt="Image Tai Lung from Kung Fu Panda" description={["Mastered the art of kung fu and became the Dragon Warrior", "Defeated the infamous martial arts prodigy, Tai Lung"]} />
            <Card title="Lord Shen" src="/shen.png" alt="Image of Shen from Kung Fu Panda 2" description={["Saved all of China from Lord Shen's army", "Destroyed a fleet of ships by redirecting high speed projectiles"]} />
            <Card title="Kai: The Collector" src="/kai.png" alt="Image of Kai from Kung Fu Panda 3" description={["Trained a civillian militia to overcome an army of kung fu masters led by General Kai", "Restored the chi of all kung fu masters"]} />
          </div>
        </section>
    );
}