
export default {
  execute: async (volume, month, distance, average) => {
    const priceBase = month <= 6 ? 1.8 : 1.95
    const costKm = distance <= 50 ? 0.05 : 0.06
    const bonus = volume > 10000 ? volume * 0.01 : 0
    const calc = (((volume * priceBase) - (costKm * distance) + (bonus)) / volume)
    const value = (((volume * priceBase) - (costKm * distance) + (bonus)))
    return {
      milkPriceBr: calc.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
      milkPriceUS: calc.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
      volume: volume.toFixed(2),
      valueMilkBrazil: value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
      valueMilkUSA: value.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
      month,
      average: average.toFixed(1)
    }
  }
}
