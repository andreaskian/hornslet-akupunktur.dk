require 'compass/import-once/activate'
# Require any additional compass plugins here.
require 'susy'
require 'breakpoint'

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "dist/css"
sass_dir = "src/scss"
images_dir = "src/images"
javascripts_dir = "src/scripts"
fonts_dir = "src/fonts"

output_style = :nested

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false
color_output = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass src/scss scss && rm -rf sass && mv scss sass
