interface GamePerformance {
  name: string;
  percentageIncrease: number;
  fpsWithTweaks: number;
  fpsWithout: number;
  logoUrl: string;
}

const gameData: GamePerformance[] = [
  {
    name: "Fortnite",
    percentageIncrease: 39,
    fpsWithTweaks: 542,
    fpsWithout: 389,
    logoUrl: "https://cdn.shopify.com/s/files/1/0571/9887/0602/files/fortnite.png?v=1754941245"
  },
  {
    name: "Valorant",
    percentageIncrease: 39,
    fpsWithTweaks: 612,
    fpsWithout: 440,
    logoUrl: "https://cdn.shopify.com/s/files/1/0571/9887/0602/files/valorant.png?v=1754941246"
  },
  {
    name: "Minecraft",
    percentageIncrease: 107,
    fpsWithTweaks: 1151,
    fpsWithout: 555,
    logoUrl: "https://cdn.shopify.com/s/files/1/0571/9887/0602/files/minecraft.png?v=1754941246"
  },
  {
    name: "Roblox",
    percentageIncrease: 158,
    fpsWithTweaks: 310,
    fpsWithout: 120,
    logoUrl: "https://cdn.shopify.com/s/files/1/0571/9887/0602/files/roblox.png?v=1754941246"
  },
  {
    name: "Call of Duty Warzone",
    percentageIncrease: 53,
    fpsWithTweaks: 260,
    fpsWithout: 170,
    logoUrl: "https://cdn.shopify.com/s/files/1/0571/9887/0602/files/call_of_duty.png?v=1754941245"
  },
  {
    name: "Call of Duty",
    percentageIncrease: 40,
    fpsWithTweaks: 365,
    fpsWithout: 260,
    logoUrl: "https://cdn.shopify.com/s/files/1/0571/9887/0602/files/black_ops_6.png?v=1754941245"
  }
];

export default gameData;