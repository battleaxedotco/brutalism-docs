<Toggle label="@click" @click="showClick"/>
<Toggle label='@update' @update="showState" />
<Toggle label='@prefs' @prefs="testPrefs" prefs-id="toggleEventExample" />
<Toggle 
  label='@mouseEnter/@mouseExit' 
  @mouseenter="showEnter" 
  @mouseleave="showExit" 
/>