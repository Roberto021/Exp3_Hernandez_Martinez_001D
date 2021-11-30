import {browser, element, by } from 'protractor'; 

describe('Mi Test', ()=>{
    beforeEach(()=>{
        browser.get("/");

    });
    it("El page 1 se muestra por defecto", ()=>{
        expect(element(by.css(".titulo ion-label")).getText()).toContain("Opciones de Menú");
    });

    it("El page 2 se muestra por defecto", ()=>{
        expect(element(by.css(".info ion-title")).getText()).toContain("Opciones de Menú");
    });
});