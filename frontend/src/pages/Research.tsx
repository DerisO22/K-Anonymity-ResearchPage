import '../styles/pages.css';
import '../styles/researchpage.css';

const Research = () => {
    return (
        <div className="page_container">
            <div className="top_section">
				<h1>Research Overview</h1>

				<div className='top_section_background'></div>
			</div>

            <div className="page_sub_section">
                <h2>Project Background</h2>
                <div className="research_background_container">
                    <div className="text_background">Privacy-Preserving Data Publishing (PPDP) is a field concerned with releasing datasets to the public or third
                        parties in a way that protects the privacy of individuals whose records appear in the data. A foundational
                        privacy model in this field is k-anonymity, which guarantees that every record in a published dataset is
                        indistinguishable from at least k-1 other records based on a set of quasi-identifier (QI) attributes, QI are
                        attributes that, while not directly identifying, can be combined to re-identify individuals (e.g., age, zip code, gender).
                    </div>

                    <div className="text_background">
                        Two well-established algorithms for achieving k-anonymity are k-Mondrian and k-Incognito. This research
                        project proposes modifications to both algorithms that improve data utility while preserving the k-anonymity
                        guarantee, and introduces a parallel execution framework to evaluate anonymization quality across a range of k
                        values simultaneously.
                    </div>
                </div>

                <h2>Motivation For Modification</h2>
                <div className="motivation_for_modification_container">
                    <div className="text_background">
                        Standard k-Mondrian and k-Incognito treat all quasi-identifier attributes with generalization, replacing specific
                        values with broader ranges or categories. While effective, this approach can result in significant information
                        loss, particularly for numerical attributes where range generalization discards distributional information.
                    </div>

                    <div className="text_background">
                        This project proposes a hybrid anonymization strategy that applies different techniques depending on the type
                        of quasi-identifier attribute:
                    </div>

                    <div className="sub_bullet">
                        1.  Numerical QIs are anonymized using a taxonomy tree to form equivalence classes, after which the
                            range label of each node is replaced with the mean of the actual values of all records in that
                            equivalence class. This preserves the grouping structure of the taxonomy tree while improving data
                            utility by replacing uninformative ranges with a more representative numerical value.
                    </div>
                    <div className="sub_bullet">
                        2.  Categorical QIs are anonymized using tree-based generalization, where each value is replaced with an
                            ancestor node in a predefined taxonomy tree. The lowest common ancestor (LCA) of all values within
                            a partition is used, ensuring the minimum necessary generalization is applied.
                    </div>

                    <div className="text_background">
                        These modifications are applied to both k-Mondrian and k-Incognito, preserving each algorithm&#39;s core
                        partitioning and grouping logic while improving the quality of the anonymized output. Importantly, both
                        algorithms adopt a methodologically consistent anonymization philosophy: equivalence classes are formed first
                        using taxonomy tree structures, and numerical QI values are then replaced with the mean of each class. The key
                        difference between the two algorithms lies solely in how equivalence classes are formed, recursive partitioning
                        in k-Mondrian versus lattice-based search in k-Incognito.
                    </div>
                </div>

                <h2>Modified Algorithms</h2>
                <div className="modified_algorithms_container">
                    <br></br>
                    <div className="sub_bullet">
                        k-Mondrian is like a real estate agent dividing a city map into neighbourhoods by drawing
                        straight lines. Fast, practical, but the lines are drawn one at a time without seeing the full
                        picture.
                    </div>
                    <div className="sub_bullet">
                        k-Incognito is like a city planner who considers all possible ways to draw the neighbourhood
                        boundaries and picks the one that best balances privacy and detail. It&#39;s slower but more
                        deliberate and globally optimal.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Research;