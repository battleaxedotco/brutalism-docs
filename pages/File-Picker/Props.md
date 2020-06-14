<File-Picker label="Custom label" />
<File-Picker folder label="Folders (doesn't work in browser)" />
<File-Picker width="fit-content" label="Custom width" />
<File-Picker
  placeholder="You need to select a file"
  label="Custom placeholder"
/>
<File-Picker prefs-id="filepicker" label="Persistant storage" />
<File-Picker icon="home" label="Custom icon" />
<File-Picker multiple label="Accept multiple files/folders" />
<File-Picker auto-read label="Return file contents instead of paths" />
<File-Picker
  :accepts="['.png', '.jpg']"
  label="Accept only .png and .jpg"
/>
<File-Picker clearable label="clearable" />
<File-Picker
  clearable
  clear-icon="delete"
  label="custom clear icon"
/>
<File-Picker
  :depth="2"
  label="Show parent folders by depth count"
/>
<File-Picker
  multiple
  :rows="4"
  :resizeable="false"
  label="Not resizable and custom row count"
/>
<File-Picker
  prefix=".../"
  multiple
  label="Custom prefix per item"
/>
<File-Picker
  auto-read
  @read="testRead"
  label="Return file content instead of path"
/>
<File-Picker
  folder
  read-folders
  @read="testRead"
  label="(No browser) Return folder children contents instead of folder path"
/>
<File-Picker
  folder
  read-folders
  flatten
  multiple
  @read="testRead"
  label="(No browser) Return all children files as single array"
/>
