export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    public increaseQuality() {
        if(this.quality < 50) {
           this.quality++; 
        }
    }

    public decreaseQuality() {
        if (this.quality > 0) {
            this.quality--;      
        } 
    }

    public checkSellIn(value) {
        if(this.sellIn < value) {
            this.increaseQuality();
        }
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = []) {
        this.items = items;
    }

    

    updateQuality() {
        this.items.forEach(item => {
            switch(item.name) {
                case 'Aged Brie':
                    item.increaseQuality();
                    item.sellIn--;
                    item.checkSellIn(0); 
                    break;
                case 'Backstage passes to a TAFKAL80ETC concert':
                    item.increaseQuality();
                    item.checkSellIn(11);
                    item.checkSellIn(6);                                        
                    item.sellIn--;
                    if (item.sellIn < 0) item.quality = 0;
                    break;
                case 'Sulfuras, Hand of Ragnaros':
                    break; 
                default:
                    item.decreaseQuality();
                    item.sellIn--;
                    if (item.sellIn < 0 && item.quality > 0) item.decreaseQuality();
                    break;
            }
        });

        return this.items;
    }
}
