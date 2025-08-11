# Plugin Repository {#repository}

The plugin repository contains a copy of the plugin manifest, allowing all plugin information to be read without downloading or installing it. After installation, the plugin's own manifest will be used.

```typescript
interface PluginRepository {
  manifest_version: 1;
  name: string;
  plugins: PluginRepositoryItem[];
}

interface PluginRepositoryItem {
    id: string;
    name: string;
    esSource: string;
    systemSource: string;
    version: string;
    author: string;
    apiVersion: number;
    'name:locale'?: string;
    'overview:locale'?: string;
    'description:locale'?: string;
    category?: string;
    tags?: string[];
    homepageUrl?: string;
    supportUrl?: string;
    imageUrl?: string;
    flags?: PluginFlags[];
    dependencies?: Record<string, string>;
}
```
