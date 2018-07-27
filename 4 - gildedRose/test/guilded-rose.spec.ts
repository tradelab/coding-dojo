import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';
import { isAbsolute } from 'path';

describe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });

    it('should decrease quality by 1 - SellIn > 0', ()=> {
        const gildedRose = new GildedRose([ new Item('sword', 1, 2) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(1);
    });

    it('should increase quality by 1 when name = Aged Brie', () => {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 1, 2) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(3);
    });

    it('should increase quality by 2 when name = Backstage passes to a TAFKAL80ETC concert and sellIn < 11', () => {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 2) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(4);
    });

    it('should increase quality by 3 when name = Backstage passes to a TAFKAL80ETC concert and sellIn < 6', () => {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 2) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(5);
    });

    it('should increase quality by 2 when name = Backstage passes to a TAFKAL80ETC concert and sellIn < 6 and quality = 48', () => {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 48) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50);
    });

    it('should increase quality by 1 when name = Backstage passes to a TAFKAL80ETC concert and sellIn < 6 and quality = 49', () => {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50);
    });

    it('should decrease quality by 2 when name = sword and sellIn < 0 and quality = 50', () => {
        const gildedRose = new GildedRose([ new Item('sword', -1, 50) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(48);
    });

    it('should decrease quality by 0 when name = Backstage passes to a TAFKAL80ETC concert and sellIn < 0 and quality = 50', () => {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', -1, 50) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });

    it('should increase quality by 2 when name = Aged Brie and sellIn < 0 and quality < 50', () => {
        const gildedRose = new GildedRose([ new Item('Aged Brie', -1, 30) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(32);
    });

    it('should increase quality by 1 when name = Aged Brie and sellIn < 0 and quality = 49', () => {
        const gildedRose = new GildedRose([ new Item('Aged Brie', -1, 49) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50);
    });

    it('should decrease sellIn by 1 when name != Sulfuras, Hand of Ragnaros', () => {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 1, 30) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(0);
    });

    it('should do nothing when name = Sulfuras, Hand of Ragnaros', () => {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 1, 30) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(1);
        expect(items[0].quality).to.equal(30);
    });
});
