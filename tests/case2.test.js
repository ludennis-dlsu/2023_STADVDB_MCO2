// These are fillers, replace them later when function is implemented
test('Read Uncommitted: One transaction writes as one reads the same data item', () => {
    // Arrange
    let data = "Incredibles 2"

    const write = () => {
        data = data.slice(0, 10);
        return data;
    }

    const read = () => {
        return data;
    }

    // Act
    write();

    // Assert
    expect(read()).toBe("Incredible");
});