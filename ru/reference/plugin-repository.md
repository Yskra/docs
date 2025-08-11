# Репозиторий плагинов {#repository}

Репозиторий плагинов содержит копию манифеста плагина, чтобы можно было прочитать всю информацию плагина без загрузки и установки. После установки будет использоваться собственный манифест плагина.

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
    flags?: PluginFalgs[];
    dependencies?: Record<string, string>;
}
```
