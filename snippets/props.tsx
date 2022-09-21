interface FooProps {
    bar: string;
    baz: string;
}

// Props can be desttructured in function signatures
function Foo({ bar, baz }: FooProps)
{
    // Instead of `const { bar, baz } = props`
    return (
        <p>Foo{ bar }{ baz }</p>
    );
}
