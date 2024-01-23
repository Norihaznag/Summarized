import { createReactEditorJS } from 'react-editor-js'
import { EDITOR_JS_TOOLS } from '@/components/Editorjs/tools'

const ReactEditorJS = createReactEditorJS()

;

const ArticleEditor = () => {
  return (
    <div>
      <ReactEditorJS defaultValue={blocks} tools={EDITOR_JS_TOOLS} /> 
    </div>
  )
}

export default ArticleEditor