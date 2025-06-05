import 'package:fl_chart/fl_chart.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import '../models/weight_entry.dart';
import 'dart:math';

class WeightChart extends StatelessWidget {
  final List<WeightEntry> entries;
  final double? goalWeight; // Optional goal

  const WeightChart({super.key, required this.entries, this.goalWeight});

  @override
  Widget build(BuildContext context) {
    if (entries.isEmpty) return const Center(child: Text("No data yet"));

    entries.sort((a, b) => a.date.compareTo(b.date));

    final spots = entries
        .map((e) => FlSpot(
              e.date.millisecondsSinceEpoch.toDouble(),
              e.weight,
            ))
        .toList();

    final minY = entries.map((e) => e.weight).reduce((a, b) => a < b ? a : b) - 1;
    final maxY = entries.map((e) => e.weight).reduce((a, b) => a > b ? a : b) + 1;

    return LineChart(
      LineChartData(
        minY: minY,
        maxY: maxY,
        lineBarsData: [
          LineChartBarData(
            spots: spots,
            isCurved: true,
            belowBarData: BarAreaData(
              show: true,
              gradient: LinearGradient(
                colors: [Colors.blue.withOpacity(0.3), Colors.blue.withOpacity(0.0)],
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
              ),
            ),
            dotData: const FlDotData(show: true),
            color: Colors.blue,
            barWidth: 3,
          ),
          if (goalWeight != null)
            LineChartBarData(
              spots: [
                FlSpot(spots.first.x, goalWeight!),
                FlSpot(spots.last.x, goalWeight!),
              ],
              isCurved: false,
              isStrokeCapRound: true,
              color: Colors.green,
              barWidth: 2,
              dashArray: [5, 5],
              dotData: const FlDotData(show: false),
            ),
        ],
        titlesData: FlTitlesData(
          topTitles: AxisTitles(),
          leftTitles: const AxisTitles(
            sideTitles: SideTitles(showTitles: true,reservedSize: 40, interval: 1),
          ),
          bottomTitles: AxisTitles(
            sideTitles: SideTitles(
              showTitles: true,
              reservedSize: 32,
              getTitlesWidget: (value, meta) {
                final date = DateTime.fromMillisecondsSinceEpoch(value.toInt());
                return Padding(
                  padding: const EdgeInsets.only(top: 8),
                  child: Text(DateFormat('MM/dd').format(date),
                      style: const TextStyle(fontSize: 10)),
                );
              },
              interval: (spots.length > 1)
                  ? (spots.last.x - spots.first.x) / min(5, spots.length - 1)
                  : 1,
            ),
          ),
        ),
        lineTouchData: LineTouchData(
          enabled: true,
          touchTooltipData: LineTouchTooltipData(
            // tooltipBgColor: Colors.black87,
            getTooltipItems: (touchedSpots) {
              return touchedSpots.map((spot) {
                final date = DateTime.fromMillisecondsSinceEpoch(spot.x.toInt());
                return LineTooltipItem(
                  "${DateFormat('MMM dd').format(date)}\n${spot.y.toStringAsFixed(1)} kg",
                  const TextStyle(color: Colors.white),
                );
              }).toList();
            },
          ),
        ),
        gridData: const FlGridData(show: true),
        borderData: FlBorderData(show: true),
      ),
    );
  }
}
