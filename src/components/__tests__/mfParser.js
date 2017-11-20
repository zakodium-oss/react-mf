import parse from './mfParser';


test('C', () => {
    let result = parse('C');
    expect(result).toBe(2);
});
