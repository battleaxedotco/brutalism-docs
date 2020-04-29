<div style="display: flex; flex-wrap: nowrap">
    <Button-Group label='left (default)' left width="33vw">
        <Button icon="github-circle" />
        <Button icon="slack" />
    </Button-Group>
    <Button-Group label='center' center grid width="33vw">
        <Button icon="github-circle" />
        <Button icon="slack" />
    </Button-Group>
    <Button-Group label='right' right width="33vw">
        <Button icon="github-circle" />
        <Button icon="slack" />
    </Button-Group>
</div>
<Button-Group label='grid template="1fr 4fr"' grid template="1fr 4fr">
    <Button icon="github-circle" />
    <Button icon="slack" />
</Button-Group>
<Button-Group label='grid gap="50px"' grid gap="50px">
    <Button icon="github-circle" />
    <Button icon="slack" />
</Button-Group>
<Button-Group label='column' grid column width="60px">
    <Button icon="github-circle" />
    <Button icon="slack" />
    <Button icon="facebook" />
</Button-Group>
<Button-Group label='exclusive :active="1"' exclusive :active="[1]" >
    <Button icon="vector-point" />
    <Button icon="vector-line" />
    <Button icon="vector-rectangle" />
    <Button icon="vector-circle" />
    <Button icon="vector-triangle" />
    <Button icon="vector-polygon" />
</Button-Group>
<Button-Group 
    label='multiselect :active="[0, 1]"'
    multiselect 
    :active="[0, 1]" 
>
    <Button icon="chess-king" />
    <Button icon="chess-queen" />
    <Button icon="chess-bishop" />
    <Button icon="chess-knight" />
    <Button icon="chess-rook" />
    <Button icon="chess-pawn" />
</Button-Group>
