import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        {/* {title}  // 주석 처리하여 텍스트 숨김 */}
        <img src="https://github.com/s-nam/rottoda/blob/v4/quartz/static/rottoda_logo.png?raw=true" alt="Rottoda Logo" class="title-logo" />
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
}
.title-logo {
  height: 100px;
  vertical-align: middle;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
