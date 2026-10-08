// Project-level React Native autolinking overrides for play-native.
//
// Why this file exists:
// Under pnpm's isolated (symlinked) node_modules layout, Expo's own
// `node_modules/expo/react-native.config.js` is loaded by expo-modules-autolinking
// via require-from-string using the symlinked path. From that path its internal
// `require('expo-modules-autolinking/exports')` cannot be resolved (pnpm does not
// symlink transitive deps at the app's top-level node_modules). The load throws,
// is silently caught, and the generator falls back to the Gradle namespace
// (`expo.core`) for the package import. The real Kotlin class however lives in
// package `expo.modules`, so `:app:compileReleaseJavaWithJavac` fails with
// "cannot find symbol ExpoModulesPackage".
//
// This project-level config is merged ON TOP of the library config and pins the
// correct import. It is portable and survives dependency reinstalls (it lives in
// the app, not in node_modules).
module.exports = {
  dependencies: {
    expo: {
      platforms: {
        android: {
          packageImportPath: 'import expo.modules.ExpoModulesPackage;',
        },
      },
    },
  },
}
