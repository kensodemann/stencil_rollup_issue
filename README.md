# How to Build

This shows using one Stencil library from the other. The basic here is that you need to build the first library and then either host it via an NPM registry or link it if just dealing with it locally (obviously it is best to host it, use a private registry if you need to, then the two libraries can be worked on independently).  Note that `project-two` has been modified from the original to also use the `kws-weather-widgets` library of components. This library is a sample that is available publicly. This is to show using a third party Stencil built component library as well.

1. clone this repo
1. `cd project-one`
1. `npm i`
1. `npm run build`
1. `npm link`
1. `cd ../project-two`
1. `npm i`
1. `npm link project-one`
1. `npm run build`

The main idea here is to properly build the `project-one` distribution, and then share it with `project-two` via standard `npm link` commands. The original project was just using the other project's source as a dependency instead of the built library.
