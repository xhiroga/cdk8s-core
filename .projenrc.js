const { JsiiProject } = require('projen');

const project = new JsiiProject({
  name: 'cdk8s',
  description: 'Cloud Development Kit for Kubernetes',
  repositoryUrl: 'git@github.com:cdk8s-team/cdk8s-core.git',

  authorName: 'Amazon Web Services',
  authorUrl: 'https://aws.amazon.com',

  peerDeps: [
    'constructs',
  ],

  bundledDeps: [
    'yaml@2.0.0-5',
    'follow-redirects',
    'fast-json-patch',
  ],
  devDeps: [
    'constructs',
    '@types/follow-redirects',
    'json-schema-to-typescript',
  ],

  keywords: [
    'cdk',
    'kubernetes',
    'k8s',
    'constructs',
  ],

  defaultReleaseBranch: 'main',
  minNodeVersion: '10.17.0',

  // jsii configuration
  publishToMaven: {
    javaPackage: 'org.cdk8s',
    mavenGroupId: 'org.cdk8s',
    mavenArtifactId: 'cdk8s',
  },
  publishToPypi: {
    distName: 'cdk8s',
    module: 'cdk8s',
  },
  publishToNuget: {
    dotNetNamespace: 'Org.Cdk8s',
    packageId: 'Org.Cdk8s',
  },
  publishToGo: {
    moduleName: 'github.com/cdk8s-team/cdk8s-go',
  },
});

// _loadurl.js is written in javascript so we need to commit it and also copy it
// after compilation to the `lib/` directory.
project.gitignore.include('/src/_loadurl.js');
project.compileTask.exec('cp src/_loadurl.js lib/');

project.synth();