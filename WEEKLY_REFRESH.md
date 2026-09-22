# Monday dashboard refresh

Run this checklist every Monday at 9:00 AM Eastern and publish the completed refresh to `main` so GitHub Pages updates.

1. Before changing `data.js`, preserve the outgoing leaderboard in `leaderboard-history.js`. Add one snapshot keyed by the outgoing `CURRENT_REFRESH_WEEK`; include every participant's rank, total invested, modeled payout EV, EV versus cost, and probability of at least one CFP payout. Never replace or delete earlier snapshots.
2. Refresh every named auction lot's `prob` from ESPN FPI's published `PLAYOFF%` at `https://www.espn.com/college-football/fpi`. Recalculate The Field as the probability that at least one FPI team outside the 35 named lots makes the CFP, using the complement of the individual non-field probabilities. Refresh the latest completed games, overall and conference records, AP ranking or votes, remaining schedule difficulty, important injuries/news, and CFP path as context. After official CFP rankings begin, use those as the primary displayed ranking and AP as secondary context.
3. Set `CURRENT_REFRESH_WEEK` to that Monday and `DATA_THROUGH` to the latest game date included in the model.
4. Recalculate the leaderboard from the updated ownership-adjusted modeled payout EV. Confirm all 12 participants appear and that movement compares against the immediately preceding snapshot.
5. Keep ownership shares, auction bids, the official $36,520 pot, payout percentages, owner filter, team cards, and simulator unchanged unless a separately confirmed source requires a correction.
   Keep each team's stored conference and local logo path current when ESPN changes conference membership or branding. Store logo files under `assets/logos/`; do not depend on remote images at page load.
6. Verify the desktop table and mobile cards show participant, teams owned, total invested, modeled payout EV, EV versus cost, probability of at least one CFP payout, and weekly movement.
7. Commit and push the refresh to `main`, then verify `https://dadane23.github.io/sober-stakes-calcutta/` displays the new refresh date and leaderboard.

If a prior snapshot is unavailable, label the week as the baseline instead of inventing movement.
