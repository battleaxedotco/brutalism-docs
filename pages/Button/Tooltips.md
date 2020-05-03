<Anno>Positioning Test</Anno>
<Button-Group grid>
    <Button block tooltip="Default">Default tooltip</Button>
    <Button block no-bold tooltip="Default">No bold tooltip</Button>
    <Button block tooltip="Only opacity transition" no-slide
        >Adding no-slide prop</Button
    >
</Button-Group>
<Button-Group grid>
    <Button block left tooltip="Aligned to left"
        >Left prop on button also aligns tooltip</Button
    >
    <Button block right tooltip="Adding the top prop" top
        >Right and top props</Button
    >
</Button-Group>
<div class="divider" />
<Anno>Timing</Anno>
<Button-Group grid>
    <Button block left
        tooltip="cubic-bezier(0.48, 0.04, 0.52, 0.96)"
        timing="var(--quad)"
        >Quad timing</Button
    >
    <Button block
        tooltip="cubic-bezier(0.76, 0, 0.24, 1)"
        timing="cubic-bezier(0.76, 0, 0.24, 1)"
        >Custom timing</Button
    >
    <Button block right
        tooltip="cubic-bezier(0.84, 0, 0.16, 1)"
        timing="var(--quint)"
        >Quint timing</Button
    >
    </Button-Group>
    <Button-Group grid>
    <Button block left
        tooltip="I'm slow to animate"
        duration="1000ms"
        >Custom duration</Button
    >
    <Button block 
        tooltip="I'm slow to respond" 
        delay="1000ms"
        >Custom delay</Button
    >
</Button-Group>