export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = []) {
        this.items = items;
    }

    private increaseQuality(item: Item, numberIncrement = 1): number {
        return item.quality < 50 ? item.quality +  numberIncrement : item.quality;
    }

    private decreaseQuality(item: Item): number {
        return item.name != 'Sulfuras, Hand of Ragnaros' ? item.quality - 1 : item.quality;
    }

    private countCheckSellIn(sellIn: number): number {
        return (sellIn >= 6 && sellIn < 11) ?  1 :
            (sellIn < 6 && sellIn < 11) ? 2 : 0;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                if (this.items[i].quality > 0) {
                    this.items[i].quality = this.decreaseQuality(this.items[i]);
                }
            } else {
                this.items[i].quality = this.increaseQuality(this.items[i]);
                if (this.items[i].quality < 50) {
                    if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                        this.items[i].quality = 
                            this.increaseQuality(this.items[i], this.countCheckSellIn(this.items[i].sellIn));
                    }
                }
            }
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            if (this.items[i].sellIn < 0) {
                if (this.items[i].name != 'Aged Brie') {
                    if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                        if (this.items[i].quality > 0) {
                            this.items[i].quality = this.decreaseQuality(this.items[i]);
                        }
                    } else {
                        this.items[i].quality = 0
                    }
                } else {
                    this.items[i].quality = this.increaseQuality(this.items[i]);
                }
            }
        }

        return this.items;
    }
}
