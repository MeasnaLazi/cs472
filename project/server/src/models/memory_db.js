const Anime = require("./anime");

const LIST_USER = [
    {
        id: 1,
        username: "lazi",
        password: "12345678"
    }
];

const LIST_ANIME = [
    Anime.createFromJson({
        id: 1,
        name: "Seal of Throne",
        type: "Special",
        thumbnail: "image/seal_of_throne.jpg",
        src: "https://www.youtube.com/embed/3GIDOFtA0Kk",
        description: "6000 years ago, the Demon God Emperor, Feng Xiu and the 72 Demon God Pillars descended from the sky, all creatures were contaminated with the breath of the Demon God Pillar, and instantly mutated into demon creatures and then humans entered the dark age. After which, the human practitioners arranged from the six Temples stood up to block the progress of the demons, and gradually formed a situation d where humans and demons coexisted. Protagonist Long Haochen joins forces with the Knight Temple, one of the six great temples, to become a knight to save his mother. In the adventure of step-by-step growth, the adventures, tricks, and the destined love and friendship continue to be revealed. He, Long Haochen embraced the spirit of the knight and won the recognition of others through his personality and hard work. He first formed the “No. 1 Demon Hunting Group” with other talented teenagers in the Six Temples to fight demons, fighting for human survival and dignity. At the same time, he sacrificed his life to protect his partner and most precious lover. And the situation in the world changed unexpectedly, more conspiracies were going on, and deeper secrets were waiting for him to be revealed. In the end, whether Long Haochen can win the approval of the Divine Throne and rise to the highest honor in the Knight Temple, and whether he can face the moment when all the truth is revealed, and solve the biggest crisis in the whole world. , everything still has to be disclosed.",
        release_date: "2023-10-10"
    }),
    Anime.createFromJson({
        id: 2,
        name: "Ancient Myth",
        type: "Television",
        thumbnail: "image/ancient_myth.jpg",
        src: "https://www.youtube.com/embed/-54eNLPrkl8",
        description: "Brace yourself for an electrifying tale of redemption as a seemingly ordinary boy from a humble town discovers a hidden power that could turn the world of martial arts upside down. With the removal of his Spirit Seed, hope seemed lost, until an ancient treasure emerged to change his fate forever. In the midst of a turbulent era, join Wang Hao as he navigates a treacherous path filled with danger, deceit, and unwavering determination to rise above the chaotic maelstrom that threatens to consume him. Will he succumb to the forces at play or emerge as the ultimate victor? Prepare to be enthralled by this riveting saga of resilience and power.",
        release_date: "2023-10-05"
    }),
    Anime.createFromJson({
        id: 3,
        name: "100.000 Years of Refining Qi",
        type: "Off The Air",
        thumbnail: "image/refining_qi.jpg",
        src: "https://www.youtube.com/embed/Ovw7Mw_Wb-U",
        description: "In a grand era, 100,000 years ago, the illustrious Tianlan Sect reigned supreme over the realm of cultivation. Each disciple of this remarkable clan possessed an unyielding spirit and unbeatable prowess. Amidst their ranks stood Xu Yang, the brilliant protégé of the sect’s founder. Despite being at the Qi refinement stage, Xu Yang harbored an insatiable ambition to ascend swiftly and transcend the mortal realm. For this purpose, he devoted himself to ten thousand years of seclusion, emerging only when the panorama of the cultivation world had faded into a mere shadow of its former magnificence. Now, only a handful of Tianlan Sect disciples remained, their very existence hanging by a delicate thread. Witnessing the imminent annihilation of his beloved sect, Xu Yang rallied his strength and valiantly repelled a formidable adversary, vowing to restore his sect’s glory to its pinnacle! As the sect embarks anew on its journey towards prosperity, the enigmatic truths behind Xu Yang’s cultivation gradually unfurl, revealing profound mysteries that traverse the realms of humanity, demons, and immortals. Will he emerge as an indomitable god, or succumb to the temptations of darkness? The fate of the world teeters precariously upon Xu Yang’s unwavering resolve, as he holds the power to decide the ultimate destiny of all existence!",
        release_date: "2023-01-02"
    }),
    Anime.createFromJson({
        id: 4,
        name: "Ten Thousand Worlds",
        type: "Special",
        thumbnail: "image/ten_thousand_worlds.jpg",
        src: "https://www.youtube.com/embed/BXYyo0ZHGBA",
        description: "Chu Yang, a skilled martial artist, gave up everything to improve his skills. He even sacrificed his love. After finding part of a powerful sword and being attacked, he used a technique that cost him his life. But then, he woke up as his sixteen-year-old self with the sword’s spirit inside him. Now he has a chance to correct his mistakes and fulfill his destiny as the ultimate master of the sword. He must defeat evil forces and make a name for himself.",
        release_date: "2023-11-09"
    }),
    Anime.createFromJson({
        id: 5,
        name: "Swallowed Star",
        type: "Television",
        thumbnail: "image/swallowed_star.jpeg",
        src: "https://www.youtube.com/embed/sOfkZoec47k",
        description: "In a world devastated by a mysterious virus called RR, humans are forced to build cities and fortify themselves behind walls to protect against mutated animals turned monsters. This period of trials and challenges is known as the “Nirvana Period”. Amidst this chaos, 18-year-old Luo Feng dreams of becoming a Warrior, a powerful fighter who can defend humanity. Despite facing a difficult life, Luo Feng works hard to unlock his potential and becomes recognized for his skills. He not only supports his family but also joins other warriors to fight against evil monsters and safeguard the future of mankind. Can Luo Feng and his fellow warriors triumph over the monsters and protect humanity in this desperate doomsday situation?",
        release_date: "2023-07-27"
    }),
];

module.exports = {
    LIST_USER,
    LIST_ANIME,
}



