import showLinks from '../index.js'

describe('showLinks::', () => {
    it('must be a function', () => {
        expect(typeof showLinks).toBe('function')
    })

    it('if the .md has links, it must return them all', async () => {
        const path = '/home/samuel/Desktop/lib-markdown/src/files/text1.md'
        expect(typeof await showLinks(path)).toBe('object')
    })

    it('if the .md has no links, it must say it', async () => {
        const path = '/home/samuel/Desktop/lib-markdown/src/files/text1_nolinks.md'
        expect(typeof await showLinks(path)).toBe('string')
    })
})