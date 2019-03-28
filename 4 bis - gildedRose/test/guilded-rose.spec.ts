import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should decrease quality by one when name is "SWORD"', function() {
        const gildedRose = new GildedRose([ new Item('SWORD', 0, 1) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });

    it('should increment quality by one when name is "Aged Brie" and quality is lower than 50', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 0, 40) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(42);
    })
    
    
    it('should increment quality by one when name is "Backstage passes to a TAFKAL80ETC concert" and quality is lower than 50', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 40) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(43);
    })

    it('should decrease quality by one when name is "SWORD" and sellin - 1', function() {
        const gildedRose = new GildedRose([ new Item('SWORD', -1, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(8);
    });

    it('should do nothing when name is "Sulfuras, Hand of Ragnaros" and sellin -1, quality 10', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', -1, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(10);
    });

    it('should do nothing when name is "Sulfuras, Hand of Ragnaros" and sellin - 1, quality 60', function() {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', -1, 60) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(60);
    });

    it('should when name is "Backstage passes to a TAFKAL80ETC concert" and sellin -1, quality 40', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', -1, 40) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });

    it('should when name is "Backstage passes to a TAFKAL80ETC concert" and sellin 7, quality 40', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 7, 40) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(42);
    });

    it('should when name is "Backstage passes to a TAFKAL80ETC concert" and sellin 7, quality 40', function() {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 12, 40) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(41);
    });

    it('should decrease quality by 2 when name is "SWORD" and sellin negative', function() {
        const gildedRose = new GildedRose([ new Item('SWORD', -1, 8) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(6);
    });

    it('should decrease quality by 1 when name is "SWORD" and sellin > positive ', function() {
        const gildedRose = new GildedRose([ new Item('SWORD', 2, 8) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(7);
    });


    it('should decrease quality by 1 when name is "SWORD" and sellin > positive ', function() {
        const gildedRose = new GildedRose([ new Item('SWORD', 1, 8) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(7);
    });


});
