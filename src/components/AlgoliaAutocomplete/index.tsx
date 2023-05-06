import { AutocompleteOptions, autocomplete } from '@algolia/autocomplete-js';
import { Fragment, createElement, useEffect, useRef } from 'react';
import { Root, createRoot } from 'react-dom/client';
import '@algolia/autocomplete-theme-classic';
import { createRedirectUrlPlugin } from '@algolia/autocomplete-plugin-redirect-url';

export default function AlgoliaAutocomplete(
  props?: Partial<AutocompleteOptions<any>>
) {
  const containerRef = useRef(null);
  const panelRootRef = useRef<Root | null>(null);
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    const search = autocomplete({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      plugins: [createRedirectUrlPlugin()],
      container: containerRef.current,
      renderer: { createElement, Fragment, render: () => {} },
      render({ children }, root) {
        if (!panelRootRef.current || rootRef.current !== root) {
          rootRef.current = root;

          panelRootRef.current?.unmount();
          panelRootRef.current = createRoot(root);
        }

        panelRootRef.current.render(children);
      },
      ...props,
    });

    return () => {
      search.destroy();
    };
  }, [props]);

  return <div ref={containerRef} />;
}
