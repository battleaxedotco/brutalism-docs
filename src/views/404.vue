<template>
  <Content>
    <h2>Styles</h2>
    <Display>
      <Anno>Default</Anno>
      <Anno bold>bold</Anno>
      <Anno italic>italic</Anno>
      <Anno underline>underline</Anno>
      <Anno overline>overline</Anno>
      <Anno strikethrough>strikethrough</Anno>
    </Display>
    <div class="spacer"></div>
    <Display>
      <Anno text='text="Text here"' />
      <Anno size="20px">size="20px"</Anno>
      <Anno uppercase>uppercase</Anno>
      <Anno color="#46a0f5">color="#46a0f5"</Anno>
      <Anno weight="100">weight="100"</Anno>
      <Anno weight="400">weight="400"</Anno>
      <Anno weight="600">weight="600"</Anno>
      <Anno weight="900">weight="900"</Anno>
      <Anno letter-spacing=".5ch">letter-spacing=".5ch"</Anno>
      <Anno text-decoration="underline">
        text-decoration="underline"
      </Anno>
    </Display>
  </Content>
</template>

<script>
export default {
  mounted() {
    console.log('404')
  },
  data: () => ({
    text: 'Hello world'
  }),
  components: {
    Content: require('@/components/Content.vue').default,
    Display: require('@/components/Display.vue').default,
    Coder: require('@/components/Codeking.vue').default,
    Table: require('@/components/Table.vue').default,
    UIFold: require('@/components/UIFold.vue').default
  },
  methods: {
    reportSuccess(val) {
      console.log('Copy report:', val)
    }
  }
}
</script>

<style>

</style>