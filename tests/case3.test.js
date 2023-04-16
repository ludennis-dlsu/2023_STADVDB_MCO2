// These are fillers, replace them later when function is implemented
test('Read Uncommitted: Concurrent Transactions can write the same data item in different nodes', () => {
    // Arrange
    let data = "Incredibles 2"

    const write1 = () => {
        data = data.slice(0, 10);
        return data;
    }

    const write2 = () => {
        data = data.slice(2, 10);
        return data;
    }

    // Act
    const result = (write1() !== write2());

    // Assert
    expect(result).toBe(true)
});