const googleSearch = require("./script");

dbMock = ["dog.com", "cheesepuff.com", "disney.com", "dogpictures.com"];

describe("googleSearch", () => {
    it("silly test", () => {
        expect("hello").toBe("hello");
        googleSearch("testFine", dbMock);
    });

    it("is searching google", () => {
        expect(googleSearch("hello", dbMock)).toEqual([]);
        expect(googleSearch("dog", dbMock)).toEqual([
            "dog.com",
            "dogpictures.com",
        ]);
    });

    it("work with undifined and null input", () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    });

    it("does not return more than 3 matches ", () => {
        expect(googleSearch(".com", dbMock).length).toEqual(3);
    });
});
