# Information Architecture and Classification

This file reorganizes the foundations of Information Architecture, content and information, cognitive theories of categorization, and classification schemes.

## What information architecture is

Information architecture (`Information Architecture`, IA) organizes, structures, and models information to make it understandable, findable, and usable.

Relevant definitions:

- Richard Saul Wurman: the art and science of organizing and structuring information to make it understandable.
- Rosenfeld & Morville: the combination of organization, labeling, navigation, and search in information systems, supporting findability and understanding.
- Resmini & Rosati: the structured design of complex information ecosystems that extend across digital and physical environments.

## Historical roots

IA derives from knowledge management practices that preceded the digital era.

| Reference | Contribution |
| --- | --- |
| Library science | Classification, indexing, taxonomies, and subject headings. |
| Dewey Decimal Classification (1876) | Divides knowledge into ten numerical categories and introduces hierarchical structure. |
| Paul Otlet and Mundaneum | Archive of 12 million cards based on UDC, with links that anticipated hypertext, the semantic web, and knowledge graphs. |
| Vannevar Bush and Memex | Theoretical system for associative storage and retrieval that anticipated hypertext and search. |

## Content and information

| Term | Meaning | Examples |
| --- | --- | --- |
| Content | Raw material distributed or published: texts, images, videos, audio, documents. | Article, photo, video, presentation. |
| Information | Structured, processed, and contextualized content that communicates a useful message. | Interpreted chart, tutorial, travel guide. |

A site can have a lot of content and little useful information if good IA is missing. The key is to transform content into usable information, facilitating navigation, search, and understanding.

## Categorization as a cognitive process

Categorization is fundamental for thinking, learning, reasoning, decision-making, and cognitive economy.

People categorize by:

- similarity;
- function;
- naming;
- experience;
- purpose;
- context;
- knowledge and intuitive theories.

## Classical theory of categorization

According to classical theory, every concept is defined by necessary and sufficient attributes. An element belongs to a category if it satisfies all criteria.

It works when:

- rules are rigid and objective;
- concepts are well defined and immutable;
- clarity without ambiguity is needed;
- absolute consistency is necessary.

Examples:

- prime numbers;
- valid/invalid legal documents;
- biological classification;
- product codes in databases.

Limits:

- disjunctive concepts;
- ambiguous cases;
- typicality effects;
- family resemblance;
- hybrid or contextual categories.

## Prototype theory

People categorize by comparing elements with a prototype, meaning an ideal example that contains the most representative characteristics.

It works when:

- some elements are more representative than others;
- there are variations and nuances;
- the user reasons by similarity;
- intuitive and fast categorization is needed.

Examples:

- a sparrow is more prototypical than a penguin for "bird";
- a large, colorful button is more prototypical than a hidden button;
- iPhone can be the prototype of a smartphone in an e-commerce context.

Limits:

- difficulty representing correlations between attributes;
- independent treatment of attributes;
- inability to distinguish unlikely but apparently similar combinations.

## Exemplar theory

The category is not represented by an abstract prototype but by the set of concrete examples stored in memory. Every new experience enriches the category.

It works when:

- users classify based on direct experience;
- categories have many variants;
- specific examples need to be recognized;
- flexibility is needed.

Examples:

- medical diagnosis based on previous cases;
- artworks classified by similarity with artists or periods;
- facial recognition;
- Netflix recommendations based on content already watched.

Limits:

- less suited to simple and fast classifications;
- requires experience or a database of examples;
- can increase the number of categories.

## Theory of implicit theories

People classify not only by perceptual similarity, but also according to cognitive models and deep beliefs.

Example: a synthetic diamond can be chemically identical to a natural one, but some people perceive it as different because natural origin is part of their implicit theory of authenticity.

Implication for IA: labels and categories can vary by culture, beliefs, domain, and expectations.

## Situated simulation theory

According to Barsalou, concepts are not static representations but flexible simulators that generate simulations adapted to situation, objectives, and emotions.

Example:

- in an office, "chair" evokes an ergonomic chair;
- in a park, a bench or log can become a "chair";
- in an emergency, even the armrest of a sofa can function as seating.

Implication for IA: the architecture must adapt to purposes and usage contexts, not only to abstract taxonomies.

## Opportunistic approach

People can adapt categorization flexibly based on the task and available information. In a company search engine, an employee can search by client name or company category expecting the system to adapt.

## Implications for IA

| Theory | Design implication |
| --- | --- |
| Prototypes | Some atypical items can be hard to find; filters and alternatives are needed. |
| Exemplars | Consider correlations between attributes and allow multiple assignments or tagging. |
| Implicit theories | Customize categories and labels according to cultural and cognitive models. |
| Situated simulation | Create adaptive navigation based on purpose and context. |
| Opportunistic | Support flexible search, smart suggestions, and multiple access paths. |

## Taxonomy

A taxonomy is a classification system that organizes content into categories, often hierarchical, to facilitate search, navigation, and retrieval.

## Classification schemes

A classification scheme is a structured model for organizing and categorizing content in an accessible and navigable way.

### Hierarchical taxonomy

Organizes content in a tree structure with categories and subcategories.

Advantages:

- clear and predictable;
- suited to static and well-defined content;
- useful in libraries and archives.

Problems:

- rigidity: one piece of content can belong to multiple topics but only one category;
- linear navigation;
- difficulty of expansion;
- ambiguous terms placed in unintuitive categories.

Solution: combine it with facets, tags, or controlled vocabularies.

### Sequential taxonomy

Organizes content according to a predefined and progressive order: temporal, procedural, or educational.

Examples:

- novel;
- recipe;
- checkout;
- installation wizard;
- job application.

It works for guided paths and processes in which information depends on the previous one.

### Tags and folksonomy

Tag classification assigns free labels to content. It is flat, non-hierarchical, and flexible.

Uses:

- secondary access to information;
- users' spontaneous language;
- content that changes often;
- active user contribution.

Problems:

- proliferation of similar tags;
- synonyms and duplications;
- folksonomy explosion.

Solution: controlled folksonomies or predefined tags.

### Exact schemes

Based on objective and rigid criteria.

| Scheme | When to use it |
| --- | --- |
| Chronological | Archives, news, TV guides, events, content where time is decisive. |
| Alphabetical | Dictionaries and glossaries; as a secondary scheme when the user knows the exact label. |
| Geographical | Maps, local lists, or content with a relevant geographic attribute. |

### Ambiguous schemes

They organize information based on subjective and variable categories.

| Scheme | Use | Warning |
| --- | --- | --- |
| By task | Based on what the user must do, for example "Buy a home" instead of "Mortgage loan". | Works if tasks are few and well defined. |
| By audience | Based on user type: families, businesses, young people. | Works if groups are clear, recognizable, and without excessive overlap. |

### Faceted classification

Breaks an object down into simultaneous properties, called facets.

Characteristics:

- multidimensionality;
- flexibility;
- dynamic combinations;
- improved findability;
- adaptability to different sectors.

To build it:

1. Identify the distinctive properties of objects.
2. Define facets and foci.
3. Implement facets in the information system.

Example `Prompt Engineering`:

- discipline: Computer Science, Artificial Intelligence;
- application: User Experience, Content Creation, Automation;
- tools: ChatGPT, MidJourney, Google Bard;
- field: academic research, enterprises, marketing.

Faceted classification avoids rigidly placing an interdisciplinary concept in a single category.

### Combined schemes

They combine methods to overcome the limits of individual schemes.

Examples:

- e-commerce: men/women hierarchy + size, color, material, price facets;
- news portal: thematic scheme + cross-cutting topics such as "Innovation and Future";
- customer support: task + audience, for example "Install software" for individuals, companies, resellers, developers.

## Source

Based on `01 - Introduzione all'architettura dell'informazione.pdf` and `02 - Sistemi di classificazione.pdf`.
