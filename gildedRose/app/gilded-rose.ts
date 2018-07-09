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

    private increaseQuality(quality) {
        return (quality < 50) ? ++quality : quality;
    }

    private decreaseQuality(quality) {
        return (quality > 0) ? --quality : quality;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                    this.items[i].quality = this.decreaseQuality(this.items[i].quality);
                }
            } else {
                this.items[i].quality = this.increaseQuality(this.items[i].quality);
                if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                    if (this.items[i].sellIn < 11) {
                        this.items[i].quality = this.increaseQuality(this.items[i].quality);
                    }
                    if (this.items[i].sellIn < 6) {
                        this.items[i].quality = this.increaseQuality(this.items[i].quality);
                    }
                }
            }
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].sellIn--;
            }
            if (this.items[i].sellIn < 0) {
                if (this.items[i].name != 'Aged Brie') {
                    if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                        if (this.items[i].quality > 0) {
                            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                                this.items[i].quality--;
                            }
                        }
                    } else {
                        this.items[i].quality = 0;
                    }
                } else {
                    if (this.items[i].quality < 50) {
                        this.items[i].quality++;
                    }
                }
            }
        }

        return this.items;
    }
}
